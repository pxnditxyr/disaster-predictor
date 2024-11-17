import { defineAction } from 'astro:actions'
import { db, RealDisaster, eq } from 'astro:db'
import { z } from 'astro:schema'

export const toggleStatusRealDisaster = defineAction({
  accept: 'json',
  input: z.object({
    id: z.number({ message: '🆔 El id del tipo de desastre es obligatorio.' }),
  }),
  handler: async ({ id }) => {

    try {
      const [ currentData ] = await db
        .select()
        .from( RealDisaster )
        .where( eq( RealDisaster.id, id ) )

      if ( !currentData )
        throw new Error( 'Parece que el desastre no existe 🤷‍♂️' )

      await db.update( RealDisaster ).set({
        status: !currentData.status,
        updatedAt: new Date()
      }).where(
        eq( RealDisaster.id, id )
      )
      return {
        success: true,
      }
    } catch ( error : any ) {
      throw new Error( error.message )
    }
  }
})
