import { defineAction } from 'astro:actions'
import { asc, db, desc, DisasterType } from 'astro:db'

export const findAllDisasterTypes = defineAction({
  accept: 'json',
  handler: async () => {
    const disasterTypes = await db
      .select()
      .from( DisasterType )
      .orderBy(
        desc(
          DisasterType.createdAt
        )
      )
    return {
      disasterTypes
    }
  }
})
