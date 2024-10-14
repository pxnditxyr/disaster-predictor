import { defineAction } from 'astro:actions'
import { db, MitigationAction, eq } from 'astro:db'
import { z } from 'astro:schema'

export const toggleStatusMitigationAction = defineAction({
  accept: 'json',
  input: z.object({
    id: z.number({ message: 'El id de la acción de mitigación es obligatorio.' }),
    currentStatus: z.boolean({ message: 'El estado actual de la acción de mitigación es obligatorio.' }),
  }),
  handler: async ( { id, currentStatus } ) => {

    await db.update( MitigationAction ).set({
      status: !currentStatus,
      updatedAt: new Date()
    }).where(
      eq( MitigationAction.id, id )
    )
    return {
      success: true,
    }
  }
})
