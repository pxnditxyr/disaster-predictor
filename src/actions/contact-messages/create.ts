import { defineAction } from 'astro:actions'
import { ContactMessage, db } from 'astro:db'
import { z } from 'astro:schema'

export const createContactMessage = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string({ message: '👤 El nombre es un campo obligatorio. 🆔👤' }).min( 2, { message: '👤 El nombre debe tener al menos 2 caracteres.' } ),
    email: z.string({ message: '📧 El correo electrónico es un campo obligatorio. 🆔👤' }).email({ message: '📧 El correo electrónico debe ser válido.' } ),
    message: z.string({ message: '📝 El mensaje debe tener al menos 2 caracteres.' }),
    reason: z.string({ message: '📝 La razón debe tener al menos 2 caracteres.' }),
  }),
  handler: async ({ name, email, message, reason }) => {
    await db.insert( ContactMessage ).values({
      name,
      email,
      message,
      reason,
    })

    return {
      success: true,
    }
  }
})
