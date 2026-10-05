import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Netlify (gradiek.com) serves from the root; GitHub Pages serves from the repo subpath
  base: process.env.NETLIFY ? "/" : "/andrea-perna-portfolio/",
});
