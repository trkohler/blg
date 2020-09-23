module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Про человеков`,
    // Default title of the page
    siteTitleAlt: `Про человеков`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Про человеков`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://trkohler.com`,
    // Used for SEO
    siteDescription: `Лайфстайл-блог программиста, продуктового менеджера и бывшего профессионального пловца.`,
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
    }, ],
  },
  plugins: [{
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
  }, ],
};