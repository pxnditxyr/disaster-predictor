import { defineAction } from 'astro:actions'
import { ContactMessage, db, eq } from 'astro:db'

export const findOneContactMessage = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    const [ data ] = await db
      .select()
      .from( ContactMessage )
      .where( eq( ContactMessage.id, id ) )

    if ( !data )
      throw new Error( 'Parece que el desastre no existe' )

    return {
      contactMessage: data
    }
  }
})
