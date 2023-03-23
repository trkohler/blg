import slugify from 'slugify';
import { LanguageUnion } from './translations/langStrings';

const TRACKING_MAP_POST = {
  utm_source: 'trkohler.com',
  utm_medium: 'content',
  utm_content: 'post-body',
};

export function appendPostTrackingUtms(
  postTitle: string,
  language: LanguageUnion,
  originalHref?: string,
) {
  if (!originalHref) {
    return
  }
  let tempHref = originalHref.concat(`?`);
  for (let [tracking_code, tracking_value] of Object.entries(
    TRACKING_MAP_POST
  )) {
    tempHref = tempHref.concat(`${tracking_code}=${tracking_value}&`);
  }
  tempHref = tempHref.concat(`utm_campaign=${slugify(postTitle, {lower: true})}-${language}`);
  return tempHref;
}
