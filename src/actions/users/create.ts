import { defineAction } from 'astro:actions'
import { db, User } from 'astro:db'
import { z } from 'astro:schema'
import bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'

export const createUser = defineAction({
  accept: 'form',
  input: z.object({
    userName: z.string({ message: 'Se esperaba un string en el nombre de usuario' }).min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    lastName: z.string({ message: 'Se esperaba un string en el apellido de usuario' }).min( 2, { message: '👤 El apellido debe tener al menos 2 caracteres.' } ),
    email: z.string({ message: 'Se esperaba un string en el correo de usuario' }).email({ message: '📧 El correo electrónico debe ser válido.' } ),
    password: z.string({ message: 'Se esperaba un string en la contraseña' }).min( 6, { message: '🔑 La contraseña debe tener al menos 8 caracteres.' } ),
    roleId: z.string({ message: 'Se esperaba un string en el role' }),
  }),
  handler: async ( { userName, lastName, email, password, roleId } ) => {
    await db.insert( User ).values({
      id: uuid(),
      name: userName,
      lastName,
      email,
      password: bcrypt.hashSync( password, 10 ),
      roleId
    })

    return {
      success: true,
    }
  }
})
