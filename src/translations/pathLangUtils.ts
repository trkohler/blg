import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { langMap, LanguageUnion } from './langStrings';

export const getLanguage = (pathname: string): LanguageUnion => {
  const site = useSiteMetadata();

  const parts = pathname.split(`/`).filter((part) => part !== ``);
  if (parts.length > 0) {
    const langPart = parts[0];
    const langIdentified = langMap.get(langPart);

    return langIdentified ? langIdentified : site.baseLanguage;
  }
  return site.baseLanguage;
};

export const getPathWithoutLang = (pathname?: string): string => {
  if (!pathname) {
    return '';
  }

  const withoutLang = pathname
    .split(`/`)
    .filter((part) => part !== `` && !langMap.get(part));

  return withoutLang.length > 0 ? withoutLang.join('/') : '';
};

export const routeUniqueView = (path: string) => {
  return path.split("/").reverse()[1] || '';
}

export const identifyUniqueView = (path: string, ...commonPathes: string[]): boolean => {
  const lastPartOfPath = path.split("/").pop() || '';
  return lastPartOfPath !== '' && !commonPathes.includes(lastPartOfPath)
}
