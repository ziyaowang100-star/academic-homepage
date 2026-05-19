import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ziyaowang100-star.github.io",
  base: "/academic-homepage",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
