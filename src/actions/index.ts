import { createContactMessage, findAllContactMessages, findOneContactMessage } from './contact-messages'
import {
  createDisasterType,
  toggleStatusDisasterType,
  findAllDisasterTypes,
  findOneDisasterType,
  updateDisasterType,
  findOneDisasterTypeByName
} from './disasters'

import {
  createMitigationAction,
  toggleStatusMitigationAction,
  findAllMitigationActions,
  findOneMitigationAction,
  updateMitigationAction
} from './mitigations'

import { findAllOurIcons } from './our-icons'
import { createRealDisaster, findAllRealDisasters, findOneRealDisaster, toggleStatusRealDisaster, updateRealDisaster } from './real-disasters'
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
  findOneDisasterTypeByName,

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

  // Real Disasters
  findAllRealDisasters,
  findOneRealDisaster,
  createRealDisaster,
  updateRealDisaster,
  toggleStatusRealDisaster,

  // contact messages
  findAllContactMessages,
  findOneContactMessage,
  createContactMessage,

  // Roles
  findAllRoles,
}
