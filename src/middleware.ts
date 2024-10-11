import { defineMiddleware } from 'astro:middleware'
import { getSession } from 'auth-astro/server'

const notAuthenticatedRoutes = [ '/login' ]

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
        role:      user.role,
      }
    }

    if ( url.pathname.startsWith( '/dashboard' ) && !isLoggedIn ) {
      return redirect( '/login' )
    }

    if ( notAuthenticatedRoutes.includes( url.pathname ) && isLoggedIn ) {
      return redirect( '/dashboard' )
    }

    return next()

  }
)
