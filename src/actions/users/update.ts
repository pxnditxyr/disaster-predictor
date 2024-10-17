import { defineAction } from 'astro:actions'
import { db, eq, User } from 'astro:db'
import { z } from 'astro:schema'
import bcrypt from 'bcryptjs'

export const updateUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    lastName: z.string().min( 2, { message: '👤 El apellido debe tener al menos 2 caracteres.' } ),
    email: z.string().email({ message: '📧 El correo electrónico debe ser válido.' } ),
    password: z.string().min( 6, { message: '🔑 La contraseña debe tener al menos 8 caracteres.' } ),
    roleId: z.string(),
    id: z.string({ message: 'El ID del usuario es un campo obligatorio. 🆔👤' }),
  }),
  handler: async ( { name, lastName, email, password, role, id } ) => {
    await db.update( User ).set({
      name,
      lastName,
      email,
      password: bcrypt.hashSync( password, 10 ),
      roleId,
    }).where(
      eq( User.id, id )
    )

    return {
      success: true,
    }
  }
})
