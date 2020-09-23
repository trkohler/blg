module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Трой Кёхлер`,
    // Default title of the page
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `ru`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@lekoarts_de`,
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