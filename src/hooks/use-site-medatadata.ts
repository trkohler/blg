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
          allPostsPathTemplate
          allTagsPathTemplate
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
