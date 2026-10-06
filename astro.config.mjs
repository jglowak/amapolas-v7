import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio provisorio: se define también en src/config/site.ts (TODO: dominio real).
const SITE = 'https://amapolas.org';

// ES por defecto sin prefijo; EN completo bajo /en. Los slugs no se traducen.
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } },
    }),
  ],
});
