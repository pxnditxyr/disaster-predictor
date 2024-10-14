import { defineAction } from 'astro:actions'
import { db, MitigationAction } from 'astro:db'
import { z } from 'astro:schema'

export const createMitigationAction = defineAction({
  accept: 'form',
  input: z.object({
    description: z.string().min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    actionList: z.string().min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    objectives: z.string().min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ).optional(),
    disasterTypeId: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    riskLevel: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    icon: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    address: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    safetyLevel: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    imageUrl: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
  }),
  handler: async ( { description, actionList, objectives, disasterTypeId, riskLevel, icon, address, safetyLevel, imageUrl } ) => {
    await db.insert( MitigationAction ).values({
      description,
      actionList: actionList.replace( '\n', ';' ),
      objectives: ( objectives ) ? objectives.replace( '\n', ';' ) : null,
      disasterTypeId,
      riskLevel,
      icon,
      address,
      safetyLevel,
      imageUrl,
    })

    return {
      success: true,
    }
  }
})
