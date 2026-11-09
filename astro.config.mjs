// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { contentDir } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // Static imports do not accept variables, so an alias is needed
        // https://docs.astro.build/en/guides/imports/#aliases
        '@content': fileURLToPath(new URL(contentDir, import.meta.url)),
      },
    },
  },
})
