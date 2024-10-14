import { defineAction } from 'astro:actions'
import { db, OurIcons } from 'astro:db'

export const findAllOurIcons = defineAction({
  accept: 'json',
  handler: async () => {
    const ourIcons = await db
      .select()
      .from( OurIcons )
    return {
      ourIcons
    }
  }
})
