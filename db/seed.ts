import { db, DisasterType, MitigationAction, OurIcons, Role, User } from 'astro:db'
import {
  disasterTypesSeed,
  mitigationActionsSeed,
  ourIconsSeed,
  rolesSeed,
  usersSeed
} from './seed-data'

export default async function seed() {
  await db.insert( Role ).values( rolesSeed )
  await db.insert( User ).values( usersSeed )
  await db.insert( DisasterType ).values( disasterTypesSeed )
  await db.insert( MitigationAction ).values( mitigationActionsSeed )
  await db.insert( OurIcons ).values( ourIconsSeed )
}
