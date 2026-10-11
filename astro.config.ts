import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mcssollar.com.br",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
