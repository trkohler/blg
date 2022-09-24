import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Curated Collection of Ukrainian products`,
    siteUrl: `https://www.yourdomain.tld`,
    baseLanguage: `uk`,
    otherLanguages: [`en`, `ru`],
    allPostsPathTemplate: `/all-posts-in-`,
    allTagsPathTemplate: `/all-tags-in-`
  },
  trailingSlash: `always`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://cms.trkohler.com`,
          contentApiKey: `902f4b97d9d0146046c2462390`,
      }
   },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
