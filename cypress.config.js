/* eslint-disable no-undef */
import { defineConfig } from "cypress";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://baptistemcn.surge.sh/en/";

export default defineConfig({
  e2e: {
    // baseUrl: "http://localhost:5173",
    baseUrl: url,

    video: false,
    chromeWebSecurity: false,
  },
});
