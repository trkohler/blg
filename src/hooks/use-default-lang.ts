import { graphql, useStaticQuery } from 'gatsby';

export const useSiteDefaultLang = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          baseLanguage
        }
      }
    }
  `);

  return data.site.siteMetadata.baseLanguage;
};
