import { defineAction } from "astro:actions";
import { db, MitigationAction, eq } from "astro:db";

export const findOneMitigationAction = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    const [ mitigationAction ] = await db
      .select()
      .from( MitigationAction )
      .where( eq( MitigationAction.id, id ) )

    if ( !mitigationAction )
      throw new Error( 'Parece que la acción de mitigación no existe' )

    return {
      mitigationAction
    }
  }
})
