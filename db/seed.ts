import { db, DisasterType, MitigationAction, OurIcons, Role, User } from 'astro:db'
import { v4 as uuid } from 'uuid'
import bcryptjs from 'bcryptjs'
import { disasterTypesSeed, mitigationActionsSeed } from './seed-data'

// https://astro.build/db/seed
// TODO: move independently
export default async function seed() {
  const roles = [
    { id: 'admin', name: 'Admin' },
  ]

  const users = [
    {
      id: uuid(),
      name: 'Pxndxs',
      lastName: 'Ricaldi',
      email: 'pxnditxyr@gmail.com',
      password: bcryptjs.hashSync( '123456', 10 ),
      role: 'admin',
    }
  ]

  const icons = [
    "about",
    "black-cat-statue",
    "briefcase",
    "category",
    "contact-notebook",
    "contact",
    "crystal-ball"    ,
    "date",
    "emergency-kit",
    "engineer",
    "facebook",
    "faucet",
    "fishing",
    "forest-burn",
    "github",
    "google",
    "heat-wave",
    "history",
    "home",
    "hurricane",
    "instagram",
    "landslide",
    "linkedin",
    "luggage-insurance",
    "mail",
    "message",
    "mitigations",
    "no-water",
    "profile",
    "rain",
    "rocket",
    "scientist",
    "send",
    "shield",
    "starfall",
    "stock-out",
    "storm",
    "thunderstorm",
    "toucan-tropical",
    "twitch",
    "view-hide",
    "view-show",
    "x"
  ]

  await db.insert( Role ).values( roles )
  await db.insert( User ).values( users )
  await db.insert( DisasterType ).values( disasterTypesSeed )
  await db.insert( MitigationAction ).values( mitigationActionsSeed )
  await db.insert( OurIcons ).values(
    icons.map( ( icon, index ) => {
      return {
        id: index,
        name: icon
      }
    } )
  )
}
