import { defineAction } from 'astro:actions'
import { db, DisasterType, eq } from 'astro:db'
import { z } from 'astro:schema'

export const updateDisasterType = defineAction({
  accept: 'form',
  input: z.object({
    id: z.number({ message: 'Parece que el ID no es válido.' } ),
    name: z.string().min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    description: z.string().min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    icon: z.string({ message: '📸 La imagen debe ser una URL válida.' } ),
  }),
  handler: async ( { name, description, icon, id }, { cookies } ) => {
    await db.update( DisasterType ).set({
      name,
      description,
      icon,
    }).where(
      eq( DisasterType.id, id )
    )

    return {
      success: true,
    }
  }
})
