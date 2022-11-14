import React from 'react';
import { languageToLocale, LanguageUnion } from '../translations/langStrings';
import { Helmet } from 'react-helmet';

export enum OgType {
  Article = 'article',
  Website = 'website',
}

type SeoProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  pageLanguage: LanguageUnion;
  contentType: OgType;
};

export const Seo = ({
  title,
  description,
  canonicalUrl,
  pageLanguage,
  contentType,
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={contentType} />
      <meta property="og:locale" content={languageToLocale[pageLanguage]} />
    </Helmet>
  );
};
