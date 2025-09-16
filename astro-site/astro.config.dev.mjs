// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Development config without base path
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});