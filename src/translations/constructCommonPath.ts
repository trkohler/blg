import { useSiteDefaultLang } from '../hooks/use-default-lang';
import { getLangPathes, LanguageUnion } from './langStrings';

/**
 * Construct a path with regards to baseLanguage. 
 * Path which you would provide should be without starting `/`
 * @param path 
 * @param lang 
 * @returns 
 */
export const constructPath = (path: string, lang: LanguageUnion): string => {
  const defaultLang = useSiteDefaultLang();
  const langPathes = getLangPathes(defaultLang);
  let constructedPath = lang === defaultLang
    ? `/${path}`
    : `${langPathes.get(lang)}${path}`;

    if (!constructedPath.endsWith('/')) {
        constructedPath += '/';
    }

    return constructedPath
};
