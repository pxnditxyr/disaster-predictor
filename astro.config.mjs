import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

import db from "@astrojs/db";

import auth from "auth-astro";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind(), react(), icon(), db(), auth()],
  output: 'server',
  adapter: cloudflare(),
});
