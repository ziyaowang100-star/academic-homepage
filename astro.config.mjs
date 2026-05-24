import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ziyaowang100-star.github.io/academic-homepage",
  base: "/academic-homepage",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
