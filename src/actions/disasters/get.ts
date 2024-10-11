import { defineAction } from 'astro:actions'
import { db, DisasterType } from 'astro:db'

export const getDisasterType = defineAction({
  accept: 'json',
  handler: async () => {
    const disasterTypes = await db
      .select()
      .from( DisasterType )
    return {
      disasterTypes
    }
  }
})
