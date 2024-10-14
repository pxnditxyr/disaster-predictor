import { defineAction } from 'astro:actions'
import { db, desc, MitigationAction } from 'astro:db'

export const findAllMitigationActions = defineAction({
  accept: 'json',
  handler: async () => {
    const mitigationActions = await db
      .select()
      .from( MitigationAction )
      .orderBy(
        desc(
          MitigationAction.createdAt
        )
      )
    return {
      mitigationActions
    }
  }
})
