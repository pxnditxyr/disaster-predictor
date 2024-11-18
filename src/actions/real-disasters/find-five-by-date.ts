import { defineAction } from 'astro:actions'
import { and, db, desc, gte, lt, RealDisaster } from 'astro:db'

export const findFiveRealDisastersByDate = defineAction({
  accept: 'json',
  handler: async ({ initialDate }) => {

    const startDate = new Date( initialDate )
    const endDate   = new Date( initialDate )
    endDate.setDate( startDate.getDate() + 5 )
    console.log({ startDate, endDate })

    const data = await db
      .select()
      .from( RealDisaster )
      .where(
        and(
          gte( RealDisaster.date, startDate ),
          lt( RealDisaster.date, endDate )
        )
      )
      .orderBy(
        desc(
          RealDisaster.createdAt
        )
      )
    return {
      realDisasters: data
    }
  }
})
