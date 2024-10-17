import { defineAction } from 'astro:actions'
import { db, User, eq } from 'astro:db'
import { z } from 'astro:schema'

export const toggleStatusUser = defineAction({
  accept: 'json',
  input: z.object({
    id: z.string({ message: 'El ID del usuario es un campo obligatorio. 🆔👤' }),
    currentStatus: z.boolean({ message: 'El estado actual del usuario es un campo obligatorio. 👤🔒' }),
  }),
  handler: async ( { id, currentStatus } ) => {
    await db.update( User ).set({
      status: !currentStatus,
      updatedAt: new Date()
    }).where(
      eq( User.id, id )
    )
    return {
      success: true,
    }
  }
})
