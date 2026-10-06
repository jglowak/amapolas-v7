# Amapolas v7 (Astro)

Conversión a Astro de la maqueta aprobada v5 (HTML/CSS/JS estático).

- `npm run build` → `dist/` (Node 22). Deploy: Cloudflare Workers con static assets (`wrangler.jsonc`).
- Español sin prefijo, inglés en `/en/`. Los slugs no se traducen.
- Contacto, redes, dominio y links de donación: `src/config/site.ts` (con TODOs).

## Conversión desde v5
1. `git clone https://github.com/jglowak/amapolas-v5.git _v5-ref` (ignorado por git; v5 no se modifica).
2. `npm run convert` extrae con cheerio `<style>`, `<body>` y `<script>` de cada página:
   - `src/styles/global.css` = `<style>` de index.html, literal.
   - `src/styles/pages/<pagina>.css` = `<style>` de cada página, literal.
   - `scripts/v5-extract/<pagina>/` = body, scripts y fragmentos (nav, menú mobile, footer).
3. `src/styles/v7-additions.css` y `src/styles/home.css` solo agregan reglas para elementos nuevos o que cambiaron de tag.

## Capturas
`npm run build && node scripts/screenshots.mjs /index.html / home` → `screenshots/` (v5 vs Astro, 1440 y 390 px). Las comparativas aprobables quedan en `docs/capturas/`.

## Documentación
- `docs/correcciones.md`: documento de correcciones (guía de contenido).
- `docs/seo-keywords.md`: validación de keywords.
- `docs/pendientes.md`: assets faltantes y datos de ejemplo.
