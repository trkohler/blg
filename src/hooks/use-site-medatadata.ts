import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
          baseLanguage
          otherLanguages
          postsPath
          tagsPath
        }
      }
    }
  `);

  return data.site.siteMetadata;
};