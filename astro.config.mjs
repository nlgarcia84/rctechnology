// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Asegúrate de que sea '@astrojs/vercel' (serverless) o '@astrojs/vercel/static'

export default defineConfig({
  output: 'server',
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: [],
    },
    imageService: true, // Esto delega la optimización a Vercel
  }),
});
