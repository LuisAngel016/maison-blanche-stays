import en from './en.json';
import es from './es.json';

export type Lang = 'es' | 'en';

type Dict = typeof en;

const dictionaries: Record<Lang, Dict> = { en, es };

export function getLang(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return maybeLang === 'en' ? 'en' : 'es';
}

function resolvePath(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang] ?? dictionaries.es;

  return (key: string): string => {
    const value = resolvePath(dict, key);
    if (typeof value === 'string') return value;
    return key;
  };
}

export function getDictionary(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries.es;
}
