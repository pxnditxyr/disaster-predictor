import { defineAction } from 'astro:actions'
import { db, eq, MitigationAction } from 'astro:db'
import { z } from 'astro:schema'

export const updateMitigationAction = defineAction({
  accept: 'form',
  input: z.object({
    description: z.string().min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    actionList: z.string().min( 2, { message: '👤 Las acciones deben tener al menos 2 caracteres.' } ),
    objectives: z.string().min( 2, { message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    disasterTypeId: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    riskLevel: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ),
    icon: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    address: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    safetyLevel: z.number({ message: '📝 La descripción debe tener al menos 2 caracteres.' } ).optional(),
    imageUrl: z.string({ message: '📸 La imagen debe ser una URL válida.' } ).optional(),
    id: z.number({ message: 'Parece que el ID no es válido.' } ),
  }),
  handler: async ( { description, actionList, objectives, disasterTypeId, riskLevel, icon, address, safetyLevel, imageUrl, id } ) => {

    const newActionList = actionList.trim().split( '\n' )
    const newObjectives = objectives.trim().split( '\n' )

    await db.update( MitigationAction ).set({
      description,
      actionList: newActionList.join( ';' ),
      objectives: newObjectives.join( ';' ),
      disasterTypeId,
      riskLevel,
      icon,
      address,
      safetyLevel,
      imageUrl,
    }).where(
      eq( MitigationAction.id, id )
    );

    return {
      success: true,
    }
  }
})
