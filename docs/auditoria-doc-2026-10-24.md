# Auditoría: doc "ESQUELETO TEXTOS FINAL PAGINA WEB AMAPOLAS" vs. sitio (rama main)

- **Doc**: Google Drive `1XexuF_LbFAkfqvjRiTsiAK2FH7AzdxF51I3Jr1-oKHU`. **Última modificación: 2026-10-24 21:53 UTC** (dlopezguillermon). Último comentario: 2026-10-24 21:49 UTC.
- **Sitio**: `/home/user/amapolas-v7`, contenido de `origin/main` (commit 5515476; idéntico a la rama de trabajo actual). Solo versión en español.
- **Método**: texto del doc + comentarios (83 hilos: 45 abiertos, 38 resueltos). Muchos comentarios del doc están anclados a **capturas de pantalla** del sitio anterior (v5), no a texto. Exporté el doc a HTML para ver esas capturas y saber a qué sección se refiere cada "Sacar esta sección". Las secciones que aparecen en una captura **sin** comentario las tomo como "se mantienen".
- **Dato clave**: `docs/correcciones.md` (la base de los textos del sitio) es del 2026-10-06. **Casi todos los comentarios abiertos del doc son del 23 y 24 de octubre (38 hilos `doco.*`) y la gran mayoría todavía no está aplicada en el sitio.**
- La segunda mitad del doc (desde el segundo "# QUIÉNES SOMOS", línea ~668 del texto en adelante) es material de borrador anterior (textos largos, listas de eventos, links de prensa). No la tomé como especificación de páginas.

Notación: "doc" = lo que dice el documento; "sitio" = lo que hay en el código. Archivos de textos en `src/i18n/*.ts`; el orden de secciones sale del markup de cada componente.

---

## Menú (`src/components/Nav.astro`, `src/i18n/ui.ts`)

**1. Orden de secciones**
- Doc: Home · Nosotras (¿Quiénes somos?, Género, Hábitat sustentable, Interculturalidad, Cuidado y cohousing) · Proyectos (Barrio Amapolas, Proyectos agroecológicos, Formación y Capacitaciones) · Acciones y Prensa (**Prensa, Kit de prensa, Eventos y acciones**) · Comunidad (Red de alianzas, Fundaciones y organizaciones, Sponsors, Donantes).
- Sitio: igual, salvo Acciones y Prensa: **Eventos y Acciones, Prensa, Kit de Prensa**.
- **No coincide** en el submenú de Acciones y Prensa. Comentario abierto `doco.VfulsitE` (23/10): "Cambiar el orden y dejarlo así. Eventos y acciones al final." (aplica al escritorio y al menú mobile).

**2. Textos**: coinciden ("Formación y Capacitaciones", "Hábitat Sustentable", "Cuidado y Cohousing", etc.).

**3. Faltan / sobran**: nada.

**4. Comentarios abiertos**
- `doco.VfulsitE`: orden del submenú, **pendiente**.
- `doco.kTuOHKem` ("Atención!") sobre "ACCIONES Y PRENSA (que te lleve a la página de acciones y prensa…)": el doc pide que el padre tenga link. **Decidido distinto** por el dueño (sin link).
- Proyectos y Agroecológicos "sin submenú, solo scroll" (resuelto): el sitio cumple.

---

## Home (`src/components/home/Home.astro`, `src/i18n/home.ts`)

**1. Orden de secciones**
- Doc: Hero → Quiénes somos (3 pilares) → Cita → Nuestros proyectos (3 cards) → Valores (solo captura, sin comentario) → Socias (solo fotos) → ODS ("7 ODS con Amapolas") → Documentación institucional (dossier) → "Tu aporte importa" (corto) + cuadro completo "Ayudanos a comprar el terreno" → Indicadores → Newsletter.
- Sitio: Hero → About → Cita → Proyectos → Valores → Socias → ODS → Dossier → DonationBox (cuadro completo) → Indicadores → Newsletter (+ popup de newsletter).
- **Coincide.**

**2. Textos que no coinciden** (solo diferencias reales)
- Card Formación. Doc: "Construcción de una escuela agroecológica con perspectiva de género e interculturalidad." Sitio: "A futuro: un espacio de formación en agroecología…". **Decidido distinto** (cambio de "escuela" a "espacio").
- ODS 3: el doc dice "kümen mogen" y el sitio "küme mogen". Es solo grafía; en Hábitat el propio doc escribe "Küme Mogen".
- Cuadro de donación: el doc tiene un segundo bloque, "Ayudanos a comprar el terreno", con el párrafo "Podés realizar tu aporte de forma segura a través de Donorbox… o a través de Mercado Pago, si te encontrás en Argentina. En esta etapa, los fondos recaudados estarán destinados prioritariamente a la adquisición del terreno…", más montos USD 35/100/500/200, mensuales USD 35/100/otro y el botón "Elegí el monto que quieras aportar mensualmente". En el sitio, `DonationBox` muestra el bloque "Tu aporte importa" y, al lado, el formulario embebido de Donorbox y la pestaña de Mercado Pago. Ese título y ese párrafo **no aparecen**, y los montos los maneja el widget. El dueño pidió no tocar el largo del texto, pero esto es un bloque distinto. **Ambiguo**: confirmar si hace falta.

**3. Faltan / sobran**: nada estructural.

**4. Comentarios abiertos**
- `AAACIRiaKec` "Queda un poco largo" (texto de donación): el dueño decidió dejarlo así.
- `AAACIRiaKeU` "El título queda!" (socias): cumplido.
- `AAACGHG6luk` "Vamos a poner solo fotos, sin nombres…" (anclado por error al CTA "Ver todos los proyectos"; se refiere a las socias): cumplido.
- `AAACE_zZir4` "pasar ODS a la home": cumplido.
- `AAACE_zZisY` Mercado Pago para Latinoamérica: **decidido distinto** (solo Argentina). Faltan los links reales de MP.

---

## Quiénes somos (`src/components/nosotras/Nosotras.astro`, `src/i18n/nosotras.ts`)

**1. Orden de secciones**
- Doc: Hero "Nosotras" (**sin menú de abajo**) → La cooperativa (izq.) + Quiénes somos (der.) → Las socias → Nuestra historia (timeline) → Cómo nos organizamos → Ejes (01/02/03) → Cita de misión + CTA "Tu aporte también construye comunidad".
- Sitio: Hero con pestañas → Historia → Socias → Timeline → Cómo nos organizamos → Ejes → Misión → CTA.
- **El orden coincide.** Las diferencias están dentro de cada sección.

**2. Textos que no coinciden**
- Bloque dossier de la columna izquierda. Doc: "Descargá el dossier (**sacar lo del balance**, lo demás queda igual)", con comentario abierto "Atención!". Sitio: título "Descargá el dossier **o solicitá el balance**" y botón "Solicitar balance" (mailto). **Pendiente**: sacar el balance de esta página (en Comunidad sí va "Solicitar balance e información financiera").
- Timeline, encabezado. Doc (comentario `mgLtAUoX` "Intercambiar los títulos!!"): volanta "Construcción colectiva", título "Nuestra historia". Sitio: volanta "Nuestra historia", título "Construcción colectiva". **Pendiente.**
- Timeline, contenido. Comentario `YMEw13cU`: "Sacar todo lo que va debajo de los años y sacar los años repetidos. O sea, que quede solo un 2022, etc." El sitio muestra una etiqueta debajo de cada año (`tl-month`: "Fundación", "Matrícula INAES"…) y repite años (2022 ×2, 2023 ×2, 2024 ×2, 2025 ×3, 2026 ×2). **Pendiente**: agrupar por año y sacar las etiquetas.
- Timeline, orden. El doc lista los años de forma **descendente** (2026 → 2022); el sitio los muestra ascendentes. **Ambiguo**: puede ser solo como lo escribieron.
- Las frases de las socias están en `font-weight:600` + itálica (`src/styles/pages/nosotras.css:144`). Comentario `WCyFXe5_`: "Todas las frases están en negrita. Que no estén!" **Pendiente.**

**3. Faltan / sobran según el doc**
- **Sobra**: el menú de pestañas del hero (Historia / Las socias / Cómo nos organizamos / Ejes de trabajo). Comentario `UlVVVQL9`: "Sacar el menú de abajo".
- **Sobra**: el contador "12 socias" (`socias-count`). Comentario `UoQ-6krh`: "Sacar".
- **Sobra**: el botón y la mención del balance en el bloque dossier (ver arriba).

**4. Comentarios abiertos**: `UlVVVQL9`, `UoQ-6krh`, `kRkGX5JT`, `WCyFXe5_`, `mgLtAUoX`, `YMEw13cU`, todos pendientes.

---

## Género (`src/components/nosotras/Genero.astro`, `src/i18n/genero.ts`)

**1. Orden de secciones**
- Doc: Hero (**sin recuadro arriba del título**) → La habitación propia + ODS 5 → ~~Fechas que nos marcan~~ (se saca) → Cifras + fuentes → CTA (captura sin comentario).
- Sitio: Hero con badge "01 · Perspectiva de género" → Bloque 1 → **Bloque 2 "Fechas que nos marcan"** → Cifras → CTA.
- **No coincide**: sobra "Fechas que nos marcan".

**2. Textos que no coinciden**
- Bloque 1: sigue el párrafo "Nuestra motivación es que este espacio cooperativista sea un lugar donde desarrollarnos, crecer y demostrar que otro modelo es posible." Comentario `_M5GQL8P`: "Sacar este párrafo". **Pendiente.**
- El resto coincide (Virginia Woolf, ODS 5, cifras 30% / 70% / 15–20%, fuentes).

**3. Faltan / sobran**
- **Sobra**: el badge del hero (`hero-badge`). Comentario `go1Zg_oX`.
- **Sobra**: la sección "Fechas que nos marcan". Comentario `u4HV2woZ`: "Sacar esta sección que se puso sola".

**4. Comentarios abiertos**: `go1Zg_oX`, `_M5GQL8P`, `u4HV2woZ`, todos pendientes. `AAACE_23qgs` y `AAACFGSm2Fs` están resueltos.

---

## Hábitat sustentable (`src/components/nosotras/Sustentabilidad.astro`, `src/i18n/sustentabilidad.ts`)

**1. Orden de secciones**
- Doc: Hero → "Una forma de habitar / Un vínculo respetuoso con la naturaleza" (+ ODS) → Enfoque "Herramientas que nos guían" → "Comunidad y vínculos" (+ ODS) → CTA "Construimos desde el cuidado".
- Sitio: Hero → Bloque 1 → Enfoque → Bloque 2 → CTA.
- **Coincide.**

**2. Textos que no coinciden**
- Los textos de los cuatro bloques coinciden con el doc.
- "Comunidad y vínculos": comentario `eSyP6XRl` "Amapolas, achicar texto." El texto del sitio es idéntico al del doc, pero el comentario pide acortarlo y el doc no trae la versión corta. **Pendiente de texto de la clienta.**

**3. Faltan / sobran**
- **Sobra**: el badge "02 · Cuidado del territorio" del hero. Comentario `I9uBGHz8`.
- Foto del bloque 1: comentario `qQ36iqLU`, "Agrandar el espacio de la foto para que no quede mal en relación con el texto". Hoy es un placeholder del mismo alto que la columna. **Pendiente de diseño**; hay que verlo en pantalla.

**4. Comentarios abiertos**: `I9uBGHz8`, `qQ36iqLU`, `eSyP6XRl`, pendientes.

---

## Interculturalidad (`src/components/nosotras/Interculturalidad.astro`, `src/i18n/interculturalidad.ts`)

**1. Orden de secciones**
- Doc: Hero → Territorio y memoria / Furilofche → Alianzas que transforman → Vínculos (Tambo Báez, Lofche Buenuleo) → CTA.
- Sitio: Hero → Bloque 1 → Bloque 2 → Vínculos (2 cards) → CTA.
- **Coincide.**

**2. Textos que no coinciden**
- Título del hero. Doc: "Construimos futuro / desde el reconocimiento / y el respeto", con comentario `q6fUCOTX` "Dejarlo en 3 líneas". Sitio: dos tramos, `['Construimos futuro desde', 'el reconocimiento y el respeto']`. **Pendiente**: partirlo en 3 líneas como el doc.

**3. Faltan / sobran**
- **Sobra**: el badge "03 · Territorio y memoria" del hero. Comentario `F23K1wND` ("Sacar el recuadro marrón de arriba del título").
- Recuadro "Marco institucional verificable" (Municipio Intercultural, RAMCC) en el bloque Furilofche: aparece en la captura del doc sin comentario, pero no en el texto. Lo dejo como "se mantiene" (ver sección final).

**4. Comentarios abiertos**: `F23K1wND`, `q6fUCOTX`, pendientes. `AAACE_23qlE` resuelto.

---

## Cuidado y cohousing (`src/components/nosotras/Cohousing.astro`, `src/i18n/cohousing.ts`)

**1. Orden de secciones**
- Doc: Hero "El cuidado como infraestructura" (sin menú) → Cohousing "Un modelo pensado para la vida comunitaria" + "¿Por qué importa para Amapolas?" → "Lo que nos diferencia / El cuidado como eje central" (+ ODS 3 + 4 ítems) → "Cohousing con perspectiva feminista" (6 cards) → ~~Qué distingue este modelo~~ → Cita (captura sin comentario) → ~~Los otros ejes~~ → CTA "Sumate a construir otra forma de habitar", **solo con "Donar ahora"**.
- Sitio: Hero → Cohousing → Cuidado → Cohousing feminista → **Diferencia** → Cita → **Ejes relacionados** → CTA con 2 botones.
- **No coincide**: sobran dos secciones y un botón.

**2. Textos que no coinciden**
- ODS 3. El doc pide sacar la oración "La vivienda segura y estable es condición material de salud física y mental." (comentario `muZmiBA8`). El sitio la mantiene (`cohousing.ts`, `cuidado.ods`). **Pendiente.**
- Card "Construcción / Diseño bioclimático y sustentabilidad": coincide con el texto nuevo del doc.

**3. Faltan / sobran**
- **Sobra**: "Qué distingue este modelo de otros proyectos de vivienda" (`diferencia-section`). Comentario `z4qmdJHn`.
- **Sobra**: "Los otros ejes que sostienen el modelo" (`ejes-section`). Comentario `4Qp_Mzt2`.
- **Sobra**: el botón "Ver el proyecto de vivienda" del CTA. Comentario `iC6ymr1j`: "Sacar este CTA".
- El hero mantiene el badge "04 · Modelo de hábitat". Aquí el doc no lo pide sacar, pero sí en las demás páginas. Conviene confirmarlo por consistencia.

**4. Comentarios abiertos**: `muZmiBA8`, `z4qmdJHn`, `4Qp_Mzt2`, `iC6ymr1j`, pendientes.

---

## Proyectos / Barrio Amapolas (`src/components/proyectos/Vivienda.astro`, `src/i18n/vivienda.ts`)

**1. Orden de secciones**
- Doc (comentario `shHD_yIN`: "Respetar este nuevo orden"):
  1. Hero (sin recuadro sobre el título)
  2. ~~"La vivienda como derecho colectivo" con ficha lateral de datos~~ (captura con comentario "Sacar esta sección")
  3. Sección "El proyecto (volanta) / La vivienda como derecho colectivo" + texto + "Cómo lo implementa Amapolas: OK" + "Los 4 apartados OK" (sobre la captura de "¿Qué es el cohousing?")
  4. ~~"El cuidado como infraestructura diseñada"~~ ("pasa a cuidado y cohousing")
  5. **Enfoque constructivo / Cómo queremos construir** (6 ítems)
  6. **Un modelo replicable** (01 Modelo cooperativo, 02 Metodología documentada, 04 Evidencia de impacto, 06 Para fondos que buscan proyección)
  7. Galería (captura sin comentario)
  8. ~~El plano del barrio~~
  9. Estado actual
  10. CTA "Apoyá este proyecto"
- Sitio: Hero (badge) → Resumen (texto + ficha de datos) → ¿Qué es el cohousing? (+ Cómo lo implementa + 4 feats) → **Cuidado** → **Replicable** → Galería → **Plano** → **Detalles "Cómo queremos construir"** → Estado → CTA.
- **No coincide**: hay que sacar Cuidado y Plano, y mover "Cómo queremos construir" para que quede **antes** de "Un modelo replicable".

**2. Textos que no coinciden**
- Bloques 2 y 3. Mi lectura: el doc saca la sección "La vivienda como derecho colectivo" tal como está, con la ficha lateral (Estado actual, Año de inicio, Matrícula, Ubicación, Conducción, Enfoque, Diseño), y lleva su texto ("El proyecto de vivienda es el corazón…") a la sección de "¿Qué es el cohousing?". Ese texto **reemplaza** la explicación genérica "Para visitantes que llegan sin ese contexto: el cohousing es…" y se mantienen "Cómo lo implementa Amapolas" y los 4 apartados. **Ambiguo** (ver preguntas). En el sitio siguen las dos secciones por separado.
- Replicable: el sitio tiene 6 ítems y el doc 4. Sobran "Alianzas internacionales" (03) y "Perspectiva feminista sistematizada" (05). El sitio numera por índice, así que quedaría 01–04. Para "Para fondos que buscan proyección" el doc da solo el título; el sitio conserva el texto de v5.
- Estado actual: "Proyectos agroecológicos (en consolidación)" y "Gestión de terreno… Donorbox (en curso)" coinciden.
- CTA: los textos coinciden. "Donar ahora" lleva a `/donar` y el doc dice "cuadro de donación en la home" (ver Donar). "(sacar donaciones trazables)": cumplido.

**3. Faltan / sobran**
- **Sobra**: el badge "Proyecto principal" del hero. Comentario `rtDkyOxH`.
- **Sobra**: la sección Resumen tal como está, con su ficha de datos. Comentario `hVa9qFdB` (ver ambigüedad).
- **Sobra**: "El cuidado como infraestructura diseñada". Comentario `MfaopA-C`. Cohousing ya tiene su propia versión, "El cuidado como eje central".
- **Sobra**: "El plano del barrio". Comentario `yLof-8jG`.
- **Sobran**: los ítems 03 y 05 de Replicable.

**4. Comentarios abiertos**: `rtDkyOxH`, `hVa9qFdB`, `MfaopA-C`, `shHD_yIN`, `yLof-8jG`, todos pendientes. `AAACFJ8K5fs` y `AAACGjQ76XI` resueltos.

---

## Proyectos agroecológicos (`src/components/proyectos/Productivos.astro`, `src/i18n/productivos.ts`)

**1. Orden de secciones**
- Doc:
  - Hero.
  - 01 Apicultura: resumen + ficha → galería → "Más que producir miel" → ~~Estado actual~~.
  - 02 Plantas nativas: resumen + ficha → galería → ~~Primeros resultados~~ → ~~Organizaciones aliadas~~ → Estado actual (un solo párrafo).
  - 03 Hongos: resumen + ficha → **"Experiencias que abren camino"** → galería → ~~El proceso de cultivo~~ → ~~Un proyecto arraigado en Tambo Báez~~ → Estado actual (captura sin comentario).
  - CTA.
- Sitio: Apicultura (resumen, galería, objetivos, **estado**) → Plantas (resumen, galería, **resultados**, **aliadas**, estado-párrafo) → Hongos (resumen, **galería, regen**, **proceso**, **territorio**, estado) → CTA.
- **No coincide**: sobran 5 secciones. Además, en Hongos "Experiencias que abren camino" va **antes** de la galería según el orden de las capturas, y en el sitio va después. Esto último es menor y conviene confirmarlo.

**2. Textos que no coinciden**
- Encabezado de Plantas. Doc: "02 Proyecto agroecológico · ~~Soberanía alimentaria~~" (comentario `MOMO-lPg` "Sacar!!"). Sitio: `tag: 'Proyecto agroecológico · Soberanía alimentaria'`. **Pendiente.**
- Ya aplicado: textos nuevos de Apicultura, Plantas y Hongos; "Nuestra cosecha" en lugar de "Autonomía económica"; sin "Integración agroecológica" ni "Medicina ancestral"; cuadritos 2025/2026 de Plantas sin período ni financiamiento; Estado de Plantas en un párrafo; Hongos sin barra de datos, con "Financiamiento internacional" y sin CIEFAP en la ficha; ODS 10 reemplazado por ODS 3; "Experiencias que abren camino" sin punteo; CTA solo con "Donar ahora" y sin "personería jurídica / donaciones trazables".

**3. Faltan / sobran**
- **Sobra**: Estado actual de Apicultura. Comentario `sAt0GaYi`.
- **Sobra**: "Primeros resultados" (Plantas). Comentario `qvxCHhqY`.
- **Sobra**: "Organizaciones aliadas" (Plantas). Comentario `BJXfzGKT`.
- **Sobra**: "El proceso de cultivo" (Hongos). Comentario `NH8BrbCG`.
- **Sobra**: "Un proyecto arraigado en Tambo Báez" (Hongos). Comentario `r7cshPOB`.

**4. Comentarios abiertos**: `sAt0GaYi`, `MOMO-lPg`, `qvxCHhqY`, `BJXfzGKT`, `NH8BrbCG`, `r7cshPOB`, pendientes. `AAACFwL6xqg` (financiamiento internacional / CIEFAP) figura abierto en el doc, pero el sitio ya lo cumple.

---

## Formación y capacitaciones (`src/components/proyectos/Formacion.astro`, `src/i18n/formacion.ts`)

**1. Orden de secciones**: Doc: Hero → Aprender en comunidad → Programas (2026 / 2026–2027 / A futuro) → CTA. Sitio: igual. **Coincide.**

**2. Textos**: coinciden ("Compartir saberes también es construir futuro.", los 3 programas, "Espacio de Formación en Agroecología" y el CTA).

**3. Faltan / sobran**
- **Sobra**: el badge "Formación" del hero. Comentario `zvd_K--N`.

**4. Comentarios abiertos**: `zvd_K--N`, pendiente. `AAACGq8VC6w` (escuela → espacio) resuelto y aplicado.

---

## Acciones y Prensa (`src/components/prensa/Prensa.astro`, `src/i18n/prensa.ts`)

**1. Orden de secciones**
- Doc: Hero "Acciones y Prensa" + texto (**sin menú de abajo**) → Prensa (cobertura mediática + "¿Querés cubrir nuestra historia?") → Kit de prensa (+ boilerplate) → **Eventos y acciones al final de todo**. Comentarios `doco.u1a9_bEv` "La sección de eventos y acciones pasarla al final de todo" y `doco.VfulsitE`.
- Sitio: Hero con pestañas → **Eventos** → Medios → Contacto de prensa → Kit.
- **No coincide**: Eventos tiene que pasar al final, después del Kit. También hay que reordenar las anclas del menú.

**2. Textos que no coinciden**
- Boilerplate (comentario `SE-E38I2`: "Reemplazar por este texto. Se le sacó una oración que repetía"). El sitio todavía tiene la oración "Es una cooperativa de vivienda en Patagonia de conducción 100% femenina y ha recibido…". Doc: "…e interculturalidad. Ha recibido tres ciclos consecutivos de financiamiento internacional de una misma ONG (2023, 2024 y 2025). Integra la Coalición…". **Pendiente.**
- Eventos 2026. El doc agrega HIC, ONU Mujeres y el 4° Fondo, y el sitio ya los tiene. El sitio además conserva "Visitas a Lofche Buenuleo y Lofche Melo" y "Desarrollo de campaña comunicacional y sitio web", que el doc no menciona. No hay pedido de sacarlos (ver preguntas).
- Ya aplicado: 1°, 2° y 3° Fondo Internacional, links del Encuentro 2024 (Instagram, ANB, YouTube, 3 episodios), contacto de prensa sin "48 hs", mail único para contacto y kit.

**3. Faltan / sobran**
- **Sobra**: el menú de pestañas del hero (`hero-tabs`). Comentario `3k5ZltxzSPYc`: "Sacar el menú de abajo".

**4. Comentarios abiertos**
- `3k5Zltxz`, `u1a9_bEv`, `SE-E38I2`: pendientes.
- `AAACHmxXdRw` "info@amapolas.org (¿se puede usar ese?)": el sitio usa `info@amapolas.org`, marcado como TODO en `src/config/site.ts`. **Falta confirmación de la clienta.**

---

## Comunidad (`src/components/comunidad/Comunidad.astro`, `src/i18n/comunidad.ts`)

**1. Orden de secciones**
- Doc: Hero (como las demás portadas: sin menú, texto debajo del título) → Cómo querés participar (3 cards) → Red de alianzas → Fundaciones y organizaciones → Sponsors → Donantes (con el cuadro completo de la home). La captura de "Kit de Prensa disponible" tiene el comentario "Sacar esta sección".
- Sitio: Hero → Perfiles (3 cards) → Alianzas → Fundaciones → Sponsors → **Prensa entry "Kit de Prensa disponible"** → Donantes → DonationBox.
- **No coincide**: sobra la franja "Kit de Prensa disponible".

**2. Textos que no coinciden**
- Los textos coinciden: hero, 3 cards, FMS y el texto de financiadores, Barrio Intercultural, fundaciones con "Solicitar balance e información financiera", sponsors con formulario multiselección y campo "¿Cómo te gustaría acompañar?", y donantes.
- Organizaciones amigas: el doc dice "quedarían sólo 4 recuadros" y el comentario `doco.B8yZxxrO` agrega "Falta ONU Mujeres". El sitio tiene 4 (HIC, Fundación Gente Nueva, Red TEC IN HAB, Barrio Intercultural) y **no tiene a ONU Mujeres**. **Pendiente**; no está claro si serían 5 recuadros o si ONU Mujeres reemplaza a otro.

**3. Faltan / sobran**
- **Sobra**: la sección `prensa-entry` ("Kit de Prensa disponible"). Comentario `doco.Dh9-K4Uc`.
- **Falta**: el recuadro de ONU Mujeres.
- Recursos descargables de la izquierda en Fundaciones: comentario `doco.wWU2QPAU`, "ver si los recuadros de la izquierda se pueden hacer más bajitos". **Pendiente de diseño.**

**4. Comentarios abiertos**
- `Dh9-K4Uc`, `B8yZxxrO`, `wWU2QPAU`: pendientes.
- `AAACFzitkgo` (portada como las demás): cumplido.

---

## Donar (`/donar` → `src/components/donar3/Donar3.astro`, textos en `src/i18n/donar3.ts`, `donar2.ts`, `donar.ts`)

Se comparan solo los textos (la página la rediseñó el dueño). El doc no tiene página "Donar"; el texto de referencia es el bloque de donación de la home.
- "Tu aporte importa / Nuestro barrio necesita su tierra" + 2 párrafos + USD 35/100/500 + cierre: **coincide literal** (incluida "escuela de agroecología", que el dueño pidió no tocar).
- Encabezado. Doc: título "Ayudanos a comprar el terreno" + "Podés realizar tu aporte de forma segura a través de Donorbox… o a través de Mercado Pago, si te encontrás en Argentina. En esta etapa, los fondos recaudados estarán destinados prioritariamente a la adquisición del terreno donde se desarrollará Amapolas." Sitio: mismo título, con el texto "Tu aporte se suma al fondo colectivo para adquirir la tierra donde vamos a construir nuestro barrio." Es otro texto con la misma idea. **Ambiguo**: el doc lo escribió para el cuadro de la home.
- Montos del doc (únicos USD 35/100/500/200; mensuales USD 35/100/otro): en el sitio los montos en USD los define el widget de Donorbox (monto inicial 30) y Mercado Pago va en ARS (montos pendientes de la ONG).
- "Donaciones seguras y trazables a través de Donorbox. Dejar matrícula INAES": en el sitio, `DonationBox` lo tiene. En `/donar` la nota de Donorbox dice "Pago seguro a través de Donorbox, plataforma internacional de donaciones." y la matrícula aparece en el encabezado y en "Por qué confiar".
- El doc manda los "Donar ahora" de varias páginas (Barrio, Agroecológicos, Formación, Comunidad, footer) al "cuadro de donación de la home". El sitio los manda a `/donar`. Parece **decidido distinto** con el rediseño de `/donar`; conviene confirmarlo.

---

## Footer (`src/components/Footer.astro`, `src/i18n/ui.ts`)

**1. Orden**: descripción → La cooperativa (Quiénes somos, Proyectos, Acciones y Prensa, Comunidad) → Colaborar (Donar, Alianzas, Kit de Prensa) → Contacto (mail, LinkedIn, Instagram) → línea legal + botones (WhatsApp, LinkedIn, Instagram, Facebook). **Coincide.**

**2. Textos**: descripción y línea legal ("Matrícula INAES N°63884 obtenida en 2022…") coinciden.

**3. Diferencias**
- Quiénes somos → `/nosotras` (el doc dice home): **decidido distinto**.
- Donar → `/donar` (el doc dice cuadro completo de la home): ver Donar.
- Mail, WhatsApp, LinkedIn, Instagram y Facebook usan URLs de ejemplo (TODO en `site.ts`).

**4. Comentarios**: `AAACE_zZitM` resuelto y aplicado.

---

## En el sitio pero no en el doc (se mantienen a propósito; no recomiendo sacarlos)

- Home: popup de newsletter.
- Quiénes somos: bloque "Consejo Administrativo vigente" (autoridades) debajo del texto "Quiénes somos". Las 4 cards de "Cómo nos organizamos" aparecen en la captura sin comentario, pero no en el texto.
- Interculturalidad: recuadro "Marco institucional verificable" (Municipio Intercultural / RAMCC). Está en la captura, no en el texto.
- Cohousing: cita "El cohousing no es vivir juntas…" y las 6 cards de "Cohousing con perspectiva feminista". Están en las capturas sin comentario.
- Agroecológicos: ODS de Apicultura y Plantas, ficha "Nota sobre cosechas" de Hongos, Estado actual de Hongos. Están en capturas sin comentario.
- Acciones y Prensa: pestaña "Contacto de prensa" (se va con el menú de pestañas) y eventos 2026 "Visitas a Lofche Buenuleo y Melo" y "Desarrollo de campaña comunicacional y sitio web".
- Comunidad: texto del muro de donantes ("Los nombres de donantes se publicarán aquí con autorización expresa…").
- `/proyectos` (página índice de Proyectos): el doc dice que "Proyectos" no lleva a ningún lado, pero el CTA de la home y el footer la enlazan.
- `/donar`: secciones "Por qué confiar", franja con foto, FAQ y popup de balance (rediseño del dueño).

---

## Cambios pendientes (prioridad de mayor a menor)

1. **Acciones y Prensa: mover "Eventos y acciones" al final** de la página (después del Kit) y reordenar el submenú del Nav, escritorio y mobile: Prensa, Kit de Prensa, Eventos y Acciones (`Prensa.astro`, `Nav.astro`).
2. **Barrio Amapolas: nuevo orden y secciones de menos.** Sacar "El cuidado como infraestructura diseñada" y "El plano del barrio". Mover "Cómo queremos construir" antes de "Un modelo replicable". Sacar la sección Resumen con su ficha lateral y llevar su texto ("El proyecto / La vivienda como derecho colectivo") a la sección de cohousing, en lugar del texto genérico, con "Cómo lo implementa" y los 4 apartados (confirmar la lectura). Sacar los ítems 03 y 05 de Replicable (`Vivienda.astro`, `vivienda.ts`).
3. **Agroecológicos: sacar 5 secciones.** Estado actual de Apicultura, Primeros resultados, Organizaciones aliadas, El proceso de cultivo y Un proyecto arraigado en Tambo Báez. Sacar "· Soberanía alimentaria" del encabezado de Plantas. Opcional: poner "Experiencias que abren camino" antes de la galería de Hongos (`Productivos.astro`, `productivos.ts`).
4. **Cohousing:** sacar "Qué distingue este modelo…", "Los otros ejes…" y el botón "Ver el proyecto de vivienda". Sacar la oración "La vivienda segura y estable es condición material de salud física y mental." de ODS 3 (`Cohousing.astro`, `cohousing.ts`).
5. **Quiénes somos:** sacar las pestañas del hero, el contador "12 socias" y el balance del bloque dossier. Timeline: intercambiar volanta y título ("Construcción colectiva" / "Nuestra historia"), un solo encabezado por año y sin etiquetas debajo. Frases de las socias sin negrita (`Nosotras.astro`, `nosotras.ts`, `pages/nosotras.css`).
6. **Género:** sacar la sección "Fechas que nos marcan" y el párrafo "Nuestra motivación…" (`Genero.astro`, `genero.ts`).
7. **Comunidad:** sacar la franja "Kit de Prensa disponible" y agregar el recuadro de ONU Mujeres en organizaciones amigas (`Comunidad.astro`, `comunidad.ts`).
8. **Sacar el badge sobre el título del hero** en Género, Hábitat sustentable, Interculturalidad, Barrio Amapolas y Formación (y, por consistencia, confirmar Cohousing).
9. **Acciones y Prensa:** sacar las pestañas del hero y reemplazar el boilerplate por el texto del doc, sin la oración repetida (`prensa.ts`).
10. **Interculturalidad:** título del hero en 3 líneas ("Construimos futuro / desde el reconocimiento / y el respeto").
11. **Diseño:** Hábitat, foto del bloque 1 más grande. Comunidad/Fundaciones, recuadros de descargas más bajos.
12. **Hábitat:** acortar "Comunidad y vínculos" cuando la clienta mande el texto.

## Preguntas abiertas para la clienta

1. Barrio Amapolas: ¿se confirma que "Sacar esta sección" sobre "La vivienda como derecho colectivo" significa eliminar el bloque con la ficha lateral y usar su texto en lugar del de "¿Qué es el cohousing?", conservando "Cómo lo implementa" y los 4 apartados?
2. Comunidad: ¿ONU Mujeres va como 5° recuadro o reemplaza a alguno de los 4? ¿Qué texto lleva?
3. Hábitat sustentable: ¿cuál es la versión corta de "Comunidad y vínculos"?
4. Timeline de Nosotras: ¿los años van de más reciente a más antiguo (2026 → 2022), como en el doc?
5. ¿Se puede usar `info@amapolas.org` como mail único (contacto, prensa, kit, footer)? Faltan también las URLs reales de WhatsApp, LinkedIn, Instagram y Facebook.
6. Eventos 2026: ¿se mantienen "Visitas a Lofche Buenuleo y Melo" y "Desarrollo de campaña comunicacional y sitio web"?
7. ¿Hace falta el texto "Podés realizar tu aporte de forma segura a través de Donorbox… o Mercado Pago, si te encontrás en Argentina…" en el cuadro de donación o en `/donar`?
8. Cohousing: ¿se saca también el badge "04 · Modelo de hábitat", como en las otras páginas de Nosotras?
9. Mercado Pago: links y montos reales en ARS (pendiente de la ONG).
