import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  outDir: '../../dist/apps/website',
  integrations: [tailwind()],
});
