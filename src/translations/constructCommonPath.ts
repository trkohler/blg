import { langToEnding, LanguageUnion } from "./langStrings";

export const constructPath = (path: string, lang: LanguageUnion) => {
    return `${path}${langToEnding[lang]}/`;
}