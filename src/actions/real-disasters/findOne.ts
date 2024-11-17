import { defineAction } from 'astro:actions'
import { db, DisasterType, eq, RealDisaster } from 'astro:db'

export const findOneRealDisaster = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    console.log({ id })
    const [ data ] = await db
      .select()
      .from( RealDisaster )
      .innerJoin( DisasterType, eq( DisasterType.id, RealDisaster.disasterTypeId ) )
      .where( eq( RealDisaster.id, id ) )

    if ( !data )
      throw new Error( 'Parece que el desastre no existe' )

    return {
      realDisaster: {
        ...data.RealDisaster,
        disasterType: data.DisasterType
      }
    }
  }
})
