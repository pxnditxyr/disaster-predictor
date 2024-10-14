import {
  createDisasterType,
  toggleStatusDisasterType,
  findAllDisasterTypes,
  findOneDisasterType,
  updateDisasterType
} from './disasters'

import {
  getMitigationActions
} from './mitigations'

import { findAllOurIcons } from './our-icons'

export const server = {
  findOneDisasterType,
  findAllDisasterTypes,
  createDisasterType,
  updateDisasterType,
  toggleStatusDisasterType,

  // Mitigations
  getMitigationActions,

  // Icons
  findAllOurIcons,
}
