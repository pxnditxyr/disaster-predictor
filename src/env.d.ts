/// <reference path="../.astro/types.d.ts" />
/// <reference path="astro/client" />

interface User {
  name:       string
  email:      string
  role:       string
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean
    user: User | null
  }
}
