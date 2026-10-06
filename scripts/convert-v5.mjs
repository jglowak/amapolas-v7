// Extrae de cada página HTML de v5 (_v5-ref/) su <style>, <body> y <script>s,
// sin retipear nada. Uso: npm run convert
//
// Salidas:
//   src/styles/global.css            ← <style> de index.html, entero
//   src/styles/pages/<pagina>.css    ← <style> de cada página, entero
//   scripts/v5-extract/<pagina>/     ← body.html, script-N.js y fragmentos
//                                      (nav, mobile, footer) para copiar literal
import { load } from 'cheerio';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SRC = '_v5-ref';
const OUT = 'scripts/v5-extract';

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (f.startsWith('.')) return [];
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return f.endsWith('.html') ? [p] : [];
  });
}

mkdirSync('src/styles/pages', { recursive: true });

for (const file of htmlFiles(SRC)) {
  const page = relative(SRC, file).replace(/\.html$/, '').replaceAll('/', '__');
  const $ = load(readFileSync(file, 'utf8'), { decodeEntities: false });
  const dir = join(OUT, page);
  mkdirSync(dir, { recursive: true });

  const css = $('head style').map((_, el) => $(el).html()).get().join('\n');
  writeFileSync(join(dir, 'style.css'), css.trim() + '\n');
  const target = page === 'index' ? 'src/styles/global.css' : `src/styles/pages/${page}.css`;
  writeFileSync(target, `/* Copia literal del <style> de v5: ${relative(SRC, file)} */\n${css.trim()}\n`);

  $('body script').each((i, el) => {
    if (!$(el).attr('src')) writeFileSync(join(dir, `script-${i + 1}.js`), $(el).html().trim() + '\n');
  });

  const frag = { nav: $('body > nav').first(), mobile: $('#mob'), footer: $('body > footer').first() };
  for (const [name, el] of Object.entries(frag)) {
    if (el.length) writeFileSync(join(dir, `${name}.html`), $.html(el) + '\n');
  }

  $('body script').remove();
  writeFileSync(join(dir, 'body.html'), $('body').html().trim() + '\n');
  console.log(`✓ ${page}`);
}
