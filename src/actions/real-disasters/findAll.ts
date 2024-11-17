import { defineAction } from 'astro:actions'
import { db, desc, DisasterType, eq, RealDisaster } from 'astro:db'

export const findAllRealDisasters = defineAction({
  accept: 'json',
  handler: async () => {
    const data = await db
      .select()
      .from( RealDisaster )
      .innerJoin( DisasterType, eq( DisasterType.id, RealDisaster.disasterTypeId ) )
      .orderBy(
        desc(
          RealDisaster.createdAt
        )
      )
    return {
      realDisasters: data.map( ({ RealDisaster, DisasterType }) => ({
        ...RealDisaster,
        disasterType: DisasterType
      }) )
    }
  }
})
