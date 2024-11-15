import { defineAction } from "astro:actions";
import { db, DisasterType, eq } from "astro:db";

export const findOneDisasterTypeByName = defineAction({
  accept: 'json',
  handler: async ({ name }) => {
    const [ disasterType ] = await db
      .select()
      .from( DisasterType )
      .where( eq( DisasterType.name, name ) )

    if ( !disasterType )
      throw new Error( 'Parece que el desastre no existe' )

    return {
      disasterType
    }
  }
})
