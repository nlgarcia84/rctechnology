// @ts-check

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [],
  },
});

// @ts-check

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [],
  },
});
