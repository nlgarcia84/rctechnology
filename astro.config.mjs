import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  image: {
    // Forzamos a que use Sharp, que es lo que Astro usa por defecto en local
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
