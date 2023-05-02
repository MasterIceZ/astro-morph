import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mastericez.github.io/astro-morph",
  base: "/astro-morph/",
  integrations: [svelte(), tailwind()],
});
