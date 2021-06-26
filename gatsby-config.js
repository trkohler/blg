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
    siteLogo: `/favicon-32x32.png`,
    // Twitter Handle
    author: `@boba_troy`,
    // Links displayed in the header on the right side
    externalLinks: [
      //   {
      //   name: `Твиттер`,
      //   url: `https://twitter.com/lekoarts_de`,
      // },
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
    showCopyButton: true,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://trkohler-blog.herokuapp.com`,
        contentApiKey: `5ec0fbe5589a79c565c84c61d0`,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        // Condition for selecting an existing GrapghQL node (optional)
        // If not set, the transformer operates on file nodes.
        filter: node => node.internal.type === `GhostPost`,
        // Only needed when using filter (optional, default: node.html)
        // Source location of the html to be transformed
        source: node => node.html,
        // Additional fields of the sourced node can be added here (optional)
        // These fields are then available on the htmlNode on `htmlNode.context`
        contextFields: [],
        // Fragment mode (optional, default: true)
        fragment: true,
        // Space mode (optional, default: `html`)
        space: `html`,
        // EmitParseErrors mode (optional, default: false)
        emitParseErrors: false,
        // Verbose mode (optional, default: false)
        verbose: false,
        // Plugins configs (optional but most likely you need one)
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://trkohler.com`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'src/data' },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: { typeName: 'Tag', path: 'src/data/convertkit-tags' },
    },
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
        externalLinks: [
          //   {
          //   name: `Твиттер`,
          //   url: `https://twitter.com/lekoarts_de`,
          // },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
      },
    },
  ],
  
};