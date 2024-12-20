import { defineMiddleware } from 'astro:middleware'
import { getSession } from 'auth-astro/server'

const notAuthenticatedRoutes = [ '/login', '/mitigations', '/predictions', '/about', '/contact', '/' ]

const adminRoutes = [ '/admin' ]
const expertRoutes = [ '/expert' ]


export const onRequest = defineMiddleware(
  async ( { url, locals, redirect, request }, next ) => {

    const session = await getSession( request )
    const isLoggedIn = !!session
    const user = session?.user

    locals.isLoggedIn = isLoggedIn
    locals.user = null

    if ( user ) {
      locals.user = {
        name:      user.name!,
        email:     user.email!,
        roleId:    user.roleId!,
      }
    }

    const adminProtectedRoutes = () => {
      const isInExpertRoutes = expertRoutes.find( ( route ) => url.pathname.startsWith( route ) )
      if ( isInExpertRoutes ) return true
      const isInPublicRoutes = notAuthenticatedRoutes.includes( url.pathname )
      if ( isInPublicRoutes ) return true
    }

    const expertProtectedRoutes = () => {
      const isInAdminRoutes = adminRoutes.find( ( route ) => url.pathname.startsWith( route ) )
      if ( isInAdminRoutes ) return true
      const isInPublicRoutes = notAuthenticatedRoutes.includes( url.pathname )
      if ( isInPublicRoutes ) return true
    }

    const publicProtectedRoutes = () => {
      const isInAdminRoutes = adminRoutes.find( ( route ) => url.pathname.startsWith( route ) )
      if ( isInAdminRoutes ) return true
      const isInExpertRoutes = expertRoutes.find( ( route ) => url.pathname.startsWith( route ) )
      if ( isInExpertRoutes ) return true
    }


    if ( isLoggedIn && user ) {
      if ( user.roleId === 'admin' ) {
        if ( adminProtectedRoutes() ) return redirect( adminRoutes[ 0 ] )
      }
      if ( user.roleId === 'expert' ) {
        if ( expertProtectedRoutes() ) return redirect( expertRoutes[ 0 ] )
      }
    } else {
      if ( publicProtectedRoutes() ) return redirect( notAuthenticatedRoutes[ 0 ] )
    }

    return next()
  }
)
