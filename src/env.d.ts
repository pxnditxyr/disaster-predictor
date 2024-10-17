/// <reference path="../.astro/types.d.ts" />
/// <reference path="astro/client" />

interface User {
  name:       string
  email:      string
  roleId:       string
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean
    user: User | null
  }
}
