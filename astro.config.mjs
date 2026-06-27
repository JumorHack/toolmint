// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config";

// https://astro.build
export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
});
