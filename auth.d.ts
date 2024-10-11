import { DefaultUser, DefaultSession } from '@auth/core/types'

declare module '@auth/core/types' {
  interface User extends DefaultUser {
    name:       string
    role:       string
  }

  interface Session extends DefaultSession {
    user: User
  }
}
