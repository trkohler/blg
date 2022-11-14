import slugify from 'slugify';

const TRACKING_MAP_POST = {
  utm_source: 'trkohler.com',
  utm_medium: 'content',
  utm_content: 'post-body',
};

export function appendPostTrackingUtms(
  originalHref: string,
  postTitle: string
) {
  let tempHref = originalHref.concat(`?`);
  for (let [tracking_code, tracking_value] of Object.entries(
    TRACKING_MAP_POST
  )) {
    tempHref = tempHref.concat(`${tracking_code}=${tracking_value}&`);
  }
  tempHref = tempHref.concat(`utm_campaign=${slugify(postTitle, {lower: true})}`);
  return tempHref;
}
