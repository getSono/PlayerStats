import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [clerk(), react()],
  adapter: vercel(),
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },
})