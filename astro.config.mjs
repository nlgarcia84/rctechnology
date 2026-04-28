import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(), // Dejamos que use la configuración por defecto, que es la más estable
  image: {
    // Forzamos a que use Sharp, que es lo que Astro usa por defecto en local
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
