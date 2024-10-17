import { defineAction } from 'astro:actions'
import { db, Role } from 'astro:db'

export const findAllRoles = defineAction({
  accept: 'json',
  handler: async () => {
    const roles = await db
      .select()
      .from( Role )
    return {
      roles
    }
  }
})
