import { defineAction } from 'astro:actions'
import { db, RealDisaster } from 'astro:db'
import { z } from 'astro:schema'

export const createRealDisaster = defineAction({
  accept: 'form',
  input: z.object({
    date: z.string({ message: '📅 La fecha debe ser válida.' }),
    address: z.string({ message: '🏠 La dirección debe tener al menos 2 caracteres.' }),
    disasterTypeId: z.number({ message: '🌪️ El tipo de desastre debe ser válido.' }),
    severityLevel: z.number({ message: '📈 El nivel de severidad debe ser válido.' }),
    description: z.string({ message: '📝 La descripción debe tener al menos 2 caracteres.' }),
    imageUrl: z.string({ message: '📸 La imagen debe ser una URL válida.' }).optional(),
  }),
  handler: async ( { date, address, disasterTypeId, severityLevel, description, imageUrl } ) => {
    await db.insert( RealDisaster ).values({
      date: new Date( date ),
      address,
      disasterTypeId,
      severityLevel,
      description,
      imageUrl,
    })

    return {
      success: true,
    }
  }
})
