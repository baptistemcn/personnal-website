import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
import robotsTxt from "./vite-plugin-robots-txt";

const dirname =
  process.env.NODE_ENV === "production"
    ? resolve(__dirname, "200.html")
    : resolve(__dirname, "index.html");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    robotsTxt(),
    sitemap({
      hostname: "https://baptistemcn.surge.sh/",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: dirname,
      },
    },
  },
});
