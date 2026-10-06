# Pendientes

## Assets faltantes (placeholder visible en el sitio)
El sitio publicado de v5 (amapolas-v5.jglowak.workers.dev) está bloqueado por la política de red del entorno de trabajo, así que no se pudo bajar nada de ahí. Faltan:

| Asset | Dónde |
|---|---|
| `hero7.png` | Hero de la home |
| `cultiva.webp` | Collage "Quiénes somos" (home) |
| Fotos de socias (`/chicas/*`) | Banda de fotos (home) y tarjetas de socias (/nosotras) |
| Fotos de las cards de proyectos | Home y /proyectos |
| `about_foto1.jpg` | Hero de /nosotras |
| Fotos de ejes (`eje_*.jpg`) | /nosotras |
| `/hero/genero.webp`, `genero_foto1/2.jpg` | /nosotras/genero |
| `sustentabilidad_hero.jpg`, `sustentabilidad_foto1/2.jpg` | /nosotras/sustentabilidad |
| `interculturalidad_hero.jpg`, `interculturalidad_foto1/2.jpg` | /nosotras/interculturalidad |
| `/proyectos/vivienda.jpeg` | /nosotras/cohousing, /proyectos/vivienda |
| Galería y plano del barrio | /proyectos/vivienda (el lightbox queda listo para las fotos) |
| `/proyectos/productivos_hero.jpg` y galerías | /proyectos/productivos |
| Foto de formación | /proyectos/formacion |
| Logos de organizaciones aliadas | /comunidad |
| `dossier-amapolas-es.pdf`, `dossier-amapolas-en.pdf` | Home, /nosotras, /prensa, /comunidad |
| Gacetilla ES/EN, pack de fotos, logo (zip) | /prensa#kit |
| Favicon | Todas las páginas |

Se usaron del repo de v5: `hero/integrantes.png` y `hero/plantas.jpg` (mismos nombres que el collage de v5) y los logos.

## Datos de ejemplo (src/config/site.ts)
- Dominio `amapolas.org`, mail, WhatsApp, LinkedIn, Instagram y Facebook.
- Links de Donorbox y Mercado Pago (aportes únicos y mensuales).
- Endpoints de formularios (prensa, alianzas, sponsors) y Turnstile: vacíos; mientras tanto los formularios abren el correo con los datos.
- El JSON-LD no publica `sameAs`, `ContactPoint` ni los links de donación hasta que `verified` pase a `true`.

## Funcionalidad pendiente
- Detección por país (cf-ipcountry) para mostrar Donorbox o Mercado Pago primero en el cuadro de donación.
- Newsletter (sección y popup): igual que en v5, todavía no envía a ningún servicio.
- Unificar el CSS al final (hoy cada página carga su CSS completo de v5, como en v5).
- Menú mobile: el ✕ de cerrar queda tapado por el ícono de menú (heredado de v5).

## Decisiones tomadas siguiendo el documento (a revisar)
- Apicultura: la primera cosecha (23 kg) figura en 2026, como dice el documento; v5 decía 2024. Se quitó el ítem "Segunda temporada activa" de la línea de tiempo del apiario porque contradecía esa fecha.
- Interculturalidad: título del hero "Construimos futuro desde el reconocimiento y el respeto" (el documento ofrecía "respeto/justicia").
- Prensa: se sumaron a "Cobertura mediática" La Montonera, Ore Tape y Radio Pública de Marcos Paz (listados en el documento).
- Comunidad: se quitó el voluntariado (no figura en el documento ni en el footer nuevo).
