import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const dirname =
  process.env.NODE_ENV === "production"
    ? resolve(__dirname, "200.html")
    : resolve(__dirname, "index.html");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: dirname,
      },
    },
  },
});
