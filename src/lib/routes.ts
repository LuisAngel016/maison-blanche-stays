import { getDictionary, type Lang } from '../i18n/utils';

export type RouteKey = 'home' | 'suites' | 'restaurant' | 'spa' | 'gallery' | 'reserve';

export const localizedRoutes: Record<RouteKey, Record<Lang, string>> = {
  home: { es: '', en: '' },
  suites: { es: 'suites', en: 'suites' },
  restaurant: { es: 'restaurant', en: 'restaurant' },
  spa: { es: 'spa', en: 'spa' },
  gallery: { es: 'galeria', en: 'gallery' },
  reserve: { es: 'reservar', en: 'reserve' },
};

export function getLocalizedPath(lang: Lang, route: RouteKey): string {
  const segment = localizedRoutes[route][lang];
  return segment ? `/${lang}/${segment}` : `/${lang}`;
}

export function getRouteFromPathname(pathname: string): RouteKey {
  const segments = pathname.split('/').filter(Boolean);
  const lang = (segments[0] === 'en' ? 'en' : 'es') as Lang;
  const localizedSegment = segments[1] ?? '';

  const route = (Object.entries(localizedRoutes).find(([, values]) => values[lang] === localizedSegment) ?? ['home'])[0];
  return route as RouteKey;
}

export function getAlternatePath(pathname: string, currentLang: Lang): string {
  const route = getRouteFromPathname(pathname);
  const nextLang: Lang = currentLang === 'es' ? 'en' : 'es';
  return getLocalizedPath(nextLang, route);
}

export function getNavigationLinks(lang: Lang) {
  const dict = getDictionary(lang);

  return [
    { key: 'suites' as const, href: getLocalizedPath(lang, 'suites'), label: dict.nav.suites },
    { key: 'restaurant' as const, href: getLocalizedPath(lang, 'restaurant'), label: dict.nav.restaurant },
    { key: 'spa' as const, href: getLocalizedPath(lang, 'spa'), label: dict.nav.spa },
    { key: 'gallery' as const, href: getLocalizedPath(lang, 'gallery'), label: dict.nav.gallery },
    { key: 'reserve' as const, href: getLocalizedPath(lang, 'reserve'), label: dict.nav.reserve },
  ];
}
