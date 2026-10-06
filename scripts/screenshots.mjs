// Capturas comparativas v5 vs Astro (escritorio 1440 px y mobile 390 px).
// Uso: npm run build && node scripts/screenshots.mjs [ruta-v5] [ruta-astro] [nombre]
// Ej.: node scripts/screenshots.mjs /index.html / home
//      node scripts/screenshots.mjs /index.html /en home-en
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const [v5Path = '/index.html', astroPath = '/', name = 'home'] = process.argv.slice(2);
const OUT = 'screenshots';
mkdirSync(OUT, { recursive: true });

const servers = [
  spawn('python3', ['-m', 'http.server', '4401', '-d', '_v5-ref'], { stdio: 'ignore' }),
  spawn('npx', ['astro', 'preview', '--port', '4402'], { stdio: 'ignore' }),
];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
await wait(3000);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const targets = [
  ['v5', `http://localhost:4401${v5Path}`],
  ['astro', `http://localhost:4402${astroPath}`],
];
const viewports = [['desktop', 1440, 900], ['mobile', 390, 844]];

try {
  for (const [vp, width, height] of viewports) {
    for (const [label, url] of targets) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle' });
      // Fuerza el estado final de las animaciones de entrada y oculta el popup de newsletter
      await page.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important} #nl-overlay{display:none!important} .socias-track{animation:none!important} nav{position:absolute!important} .scroll-top{display:none!important}' });
      await page.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager')));
      // Recorre la página para disparar imágenes lazy
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
        await document.fonts.ready;
      });
      await page.waitForLoadState('networkidle');
      await wait(800);
      const file = `${OUT}/${name}-${vp}-${label}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log('✓', file);
      await page.close();
    }
  }
  // Menú mobile abierto (Astro) y dropdown de escritorio
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto(`http://localhost:4402${astroPath}`, { waitUntil: 'networkidle' });
  await m.click('#ham');
  await m.click('.mob-acc-btn >> nth=1');
  await m.screenshot({ path: `${OUT}/${name}-mobile-menu-astro.png` });
  const d = await browser.newPage({ viewport: { width: 1440, height: 500 } });
  await d.goto(`http://localhost:4402${astroPath}`, { waitUntil: 'networkidle' });
  await d.hover('.nav-item >> nth=1');
  await wait(300);
  await d.screenshot({ path: `${OUT}/${name}-desktop-dropdown-astro.png` });
  console.log('✓ menús');
} finally {
  await browser.close();
  servers.forEach((s) => s.kill());
}
