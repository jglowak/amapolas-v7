# Amapolas v7 (Astro)

Sitio estático bilingüe (ES por defecto, EN en `/en/`) basado en la maqueta `amapolas-v5`.

## Estructura
- `src/i18n/menu.ts` – menú único (desktop + mobile). Los padres no llevan a ningún lado.
- `src/i18n/utils.ts` – helpers de idioma (`localePath`, `switchLangPath`, `langPaths`).
- `src/i18n/site.ts` – mail y redes (placeholders, reemplazar).
- `src/content/structure.ts` – esqueleto de las 12 páginas (ES/EN) según el texto de correcciones.
- `src/pages/[...lang]/*` – una ruta por página; genera `/x` (ES) y `/en/x` (EN).
- `src/components/` – `Nav`, `Footer`, `StructurePage` (stub que se reemplaza página por página).
- `src/styles/global.css` – tokens y estilos base extraídos de v5.

## Comandos
`npm install` · `npm run dev` · `npm run build` (salida en `dist/`)

## Cloudflare
Build command: `npm run build` · Output directory: `dist`

## Cambiar el idioma principal a inglés
En `astro.config.mjs`: `defaultLocale: 'en'` y mover/renombrar el prefijo (`/es/`) en `langPaths`/`localePath` (`src/i18n/utils.ts`). Los slugs no cambian.
