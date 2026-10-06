# Pendientes

## Assets faltantes (placeholder visible en el sitio)
El sitio publicado de v5 (amapolas-v5.jglowak.workers.dev) está bloqueado por la política de red del entorno de trabajo, así que no se pudo bajar nada de ahí. Faltan:

| Asset | Dónde | Estado |
|---|---|---|
| `hero7.png` | Hero de la home | Fondo degradé de v5 + etiqueta "Imagen pendiente" |
| `cultiva.webp` | Collage "Quiénes somos" (home) | Placeholder de v5 |
| `/chicas/*` (fotos de socias) | Banda de fotos (home) | 12 placeholders "Foto pendiente" |
| Fotos de cards de proyectos (`/proyectos/*.jpg`) | Cards de la home | Placeholder de color de v5 |
| `dossier-amapolas-es.pdf`, `dossier-amapolas-en.pdf` | Bloque dossier (home) | Links a archivos inexistentes |
| `informe-anual-amapolas.pdf` | Comunidad (no se usa: pasa a "Solicitar balance") | — |
| Favicon | Todas las páginas | Sin favicon |

Se usaron del repo de v5: `hero/integrantes.png` y `hero/plantas.jpg` (mismos nombres que el collage de v5), logos.

## Datos de ejemplo (src/config/site.ts)
Dominio `amapolas.org`, mail, WhatsApp, LinkedIn, Instagram, Facebook y links de Donorbox / Mercado Pago son de ejemplo (TODO). El JSON-LD no publica `sameAs` ni `ContactPoint` hasta que `verified` pase a `true`.

## Formularios
Newsletter (sección y popup): igual que en v5, todavía no envía a ningún servicio.
