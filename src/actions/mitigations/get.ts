import { defineAction } from 'astro:actions'
import { db, MitigationAction } from 'astro:db'

export const getMitigationActions = defineAction({
  accept: 'json',
  handler: async () => {
    const mitigationActions = await db
      .select()
      .from( MitigationAction )
    return {
      mitigationActions
    }
  }
})
