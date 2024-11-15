import { defineAction } from 'astro:actions'
import { db, DisasterType, eq } from 'astro:db'
import { z } from 'astro:schema'

export const toggleStatusDisasterType = defineAction({
  accept: 'json',
  input: z.object({
    id: z.number({ message: 'El id del tipo de desastre es obligatorio.' }),
    currentStatus: z.boolean({ message: 'El estado actual del desastre es obligatorio.' }),
  }),
  handler: async ( { id, currentStatus } ) => {

    await db.update( DisasterType ).set({
      status: !currentStatus,
      updatedAt: new Date()
    }).where(
      eq( DisasterType.id, id )
    )
    return {
      success: true,
    }
  }
})
