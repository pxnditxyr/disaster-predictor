import { defineAction } from 'astro:actions'
import { db, DisasterType, eq } from 'astro:db'
import { z } from 'astro:schema'

export const deleteDisasterType = defineAction({
  accept: 'json',
  input: z.object({
    id: z.number({ message: 'El id del tipo de desastre es obligatorio.' }),
  }),
  handler: async ( { id }, { cookies } ) => {
    await db.delete( DisasterType ).where(
      eq( DisasterType.id, id )
    )
    return {
      success: true,
    }
  }
})
