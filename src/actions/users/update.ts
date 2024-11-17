import { defineAction } from 'astro:actions'
import { db, eq, User } from 'astro:db'
import { z } from 'astro:schema'

export const updateUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string({ message: '👤 El nombre es un campo obligatorio. 🆔👤' }).min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    lastName: z.string({ message: '👤 El apellido es un campo obligatorio. 🆔👤' }).min( 2, { message: '👤 El apellido debe tener al menos 2 caracteres.' } ),
    email: z.string({ message: '📧 El correo electrónico es un campo obligatorio. 🆔👤' }).email({ message: '📧 El correo electrónico debe ser válido.' } ),
    roleId: z.string({ message: '👤 El rol es un campo obligatorio. 🆔👤' }),
    id: z.string({ message: 'El ID del usuario es un campo obligatorio. 🆔👤' }),
  }),
  handler: async ( { name, lastName, email, roleId, id } ) => {
    await db.update( User ).set({
      name,
      lastName,
      email,
      roleId,
    }).where(
      eq( User.id, id )
    )

    return {
      success: true,
    }
  }
})
