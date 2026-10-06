import { defineConfig } from 'astro/config';

// ES es el idioma por defecto (sin prefijo). EN vive en /en/.
// Para cambiar el idioma principal: defaultLocale + redirigir la raíz (ver README).
export default defineConfig({
  site: 'https://amapolas.org',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
