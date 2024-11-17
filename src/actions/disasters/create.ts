import { defineAction } from 'astro:actions'
import { db, DisasterType } from 'astro:db'
import { z } from 'astro:schema'

export const createDisasterType = defineAction({
  accept: 'form',
  input: z.object({
    title: z.string({ message: '👤 El titulo es obligatorio.' }).min( 2, { message: '👤 El titulo debe tener al menos 2 caracteres.' } ),
    name: z.string({ message: '👤 El nombre es obligatorio.' }).min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    description: z.string({ message: '📝 La descripción es obligatoria.' }).min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    icon: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    imageUrl: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
  }),
  handler: async ( { title, name, description, icon, imageUrl } ) => {
    await db.insert( DisasterType ).values({
      name,
      title,
      description,
      icon,
      imageUrl,
    })

    return {
      success: true,
    }
  }
})
