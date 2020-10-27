module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Troy Köhler`,
    // Default title of the page
    siteTitleAlt: `Troy Köhler`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Troy Köhler`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://trkohler.com`,
    // Used for SEO
    siteDescription: `Блог про самообразование, программирование, литературу и инвестиции.`,
    // Will be set on the <html /> tag
    siteLanguage: `ru`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@boba_troy`,
    // Links displayed in the header on the right side
    externalLinks: [{
      name: `Твиттер`,
      url: `https://twitter.com/lekoarts_de`,
    },
      // {
      //   name: `Instagram`,
      //   url: `https://www.instagram.com/lekoarts.de/`,
      // },
    ],
    // Navigation links
    navigation: [{
      title: `Записи`,
      slug: `/blog`,
    },],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178736251-1",
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        navigation: [{
          title: `Записи`,
          slug: `/blog`,
        },
        {
          title: `Про меня`,
          slug: `/about-me`,
        },
        ],
        externalLinks: [{
          name: `Твиттер`,
          url: `https://twitter.com/lekoarts_de`,
        },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
      },
    },
  ],
};