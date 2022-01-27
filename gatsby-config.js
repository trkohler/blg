require('dotenv').config();

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
    siteDescription: `Если хочешь что-то понять, запиши это. Именно по такому принципу и работает мой блог.
    Пропагандирую литературу и образование, и пишу о работе в IT.`,
    // Will be set on the <html /> tag
    siteLanguage: `ru`,
    formatString: `dddd, d MMMM, yyyy`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    siteLogo: `/favicon-32x32.png`,
    // Twitter Handle
    author: `@boba_troy`,
    showCopyButton: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        ignore: [
          'prism-okaidia.min.css',
        ],
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.API_URL,
        contentApiKey: process.env.CONTENT_API_KEY,
        version: `v3`
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
        plugins: [
          {
            resolve: `gatsby-rehype-prismjs`,
          },
        ],
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
          slug: `/pro-mienia`
        }
      ],
        externalLinks: [],
      },
    },
  ],
  
};