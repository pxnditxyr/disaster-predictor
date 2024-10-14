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
}
