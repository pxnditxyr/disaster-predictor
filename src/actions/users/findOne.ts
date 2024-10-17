import { defineAction } from 'astro:actions'
import { db, User, eq } from 'astro:db'

export const findOneUser = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    const [ user ] = await db
      .select()
      .from( User )
      .where( eq( User.id, id ) )

    if ( !user )
      throw new Error( 'Parece que el desastre no existe' )

    return {
      user
    }
  }
})
