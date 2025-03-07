import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [clerk()],
  adapter: vercel(),
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },
})