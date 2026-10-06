export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Idioma actual a partir de la URL (/en/... = inglés, resto = español). */
export function getLang(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'es';
}

/** Agrega el prefijo de idioma a una ruta interna. Los slugs no se traducen. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Misma página en el otro idioma (para el selector ES | EN). */
export function switchLangPath(url: URL, to: Lang): string {
  const stripped = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(to, stripped);
}

/** getStaticPaths compartido: genera la versión ES (sin prefijo) y EN (/en/). */
export function langPaths() {
  return [{ params: { lang: undefined } }, { params: { lang: 'en' } }];
}

export function langFromParams(lang: string | undefined): Lang {
  return lang === 'en' ? 'en' : 'es';
}
