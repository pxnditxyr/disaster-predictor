import { v4 as uuid } from 'uuid'
import bcryptjs from 'bcryptjs'

export const usersSeed = [
  {
    id: uuid(),
    name: 'Pxndxs',
    lastName: 'Ricaldi',
    email: 'pxnditxyr@gmail.com',
    password: bcryptjs.hashSync( 'pxndxs', 10 ),
    roleId: 'admin',
  },
  {
    id: uuid(),
    name: 'Experto 1',
    lastName: 'Apellido Experto 1',
    email: 'experto@gmail.com',
    password: bcryptjs.hashSync( 'pxndxs', 10 ),
    roleId: 'expert',
    status: false,
  }
]
