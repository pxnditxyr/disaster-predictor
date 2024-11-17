import { defineAction } from 'astro:actions'
import { ContactMessage, db, desc } from 'astro:db'

export const findAllContactMessages = defineAction({
  accept: 'json',
  handler: async () => {
    const data = await db
      .select()
      .from( ContactMessage )
      .orderBy(
        desc(
          ContactMessage.createdAt
        )
      )
    return {
      contactMessages: data
    }
  }
})
