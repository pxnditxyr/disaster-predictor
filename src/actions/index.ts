import {
  createDisasterType,
  toggleStatusDisasterType,
  findAllDisasterTypes,
  findOneDisasterType,
  updateDisasterType
} from './disasters'

import {
  createMitigationAction,
  toggleStatusMitigationAction,
  findAllMitigationActions,
  findOneMitigationAction,
  updateMitigationAction
} from './mitigations'

import { findAllOurIcons } from './our-icons'
import { findAllRoles } from './roles'
import {
  createUser,
  findAllUsers,
  findOneUser,
  toggleStatusUser,
  updateUser
} from './users'

export const server = {
  findOneDisasterType,
  findAllDisasterTypes,
  createDisasterType,
  updateDisasterType,
  toggleStatusDisasterType,

  // Mitigations
  createMitigationAction,
  toggleStatusMitigationAction,
  findAllMitigationActions,
  findOneMitigationAction,
  updateMitigationAction,

  // Icons
  findAllOurIcons,

  // Users
  findOneUser,
  findAllUsers,
  createUser,
  updateUser,
  toggleStatusUser,

  // Roles
  findAllRoles,
}
