import { useSiteMetadata } from "../hooks/use-site-medatadata";
import { langToEnding, LanguageUnion } from "./langStrings";

export const constructPath = (path: string, lang: LanguageUnion) => {
    const site = useSiteMetadata();
    return lang === site.baseLanguage ? `/${path}/` : `/${langToEnding[lang]}/${path}/`;
}