// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// `site` = the live Vercel production URL (set after first deploy, see CLAUDE.md §9.2).
// Used for sitemap / canonical / absolute OG URLs. Relative links work regardless.
export default defineConfig({
  site: 'https://raha.fyi',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
