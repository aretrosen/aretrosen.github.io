import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aretrosen.github.io",
  integrations: [tailwind(), mdx(), compress(), robotsTxt(), sitemap()],
  experimental: { assets: true },
});
