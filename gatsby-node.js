const path = require(`path`)
const withDefaults = require(`./src/utils/utils`)

exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes } = actions

  createTypes(`
    type MinimalBlogConfig implements Node {
      basePath: String
      blogPath: String
      postsPath: String
      pagesPath: String
      tagsPath: String
      siteLanguage: String
      externalLinks: [ExternalLink]
      navigation: [NavigationEntry]
      showLineNumbers: Boolean
      showCopyButton: Boolean
    }

    type ExternalLink {
      name: String!
      url: String!
    }

    type NavigationEntry {
      title: String!
      slug: String!
    }
  `)
}

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
      type Tag implements Node @dontInfer {
        id: ID!
        name: String!
      }
  `);
}

exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`)
}


exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, blogPath, tagsPath, formatString, postsPrefix } = withDefaults(themeOptions)

  const ghostPostTemplate = path.resolve(`./src/templates/ghost-post-query.tsx`)
  const ghostTagsTemplate = require.resolve(`./src/templates/ghost-tags-query.tsx`)
  const ghostTagTemplate = path.resolve(`./src/templates/ghost-tag-query.tsx`)
  const pageTemplate = require.resolve(`./src/templates/page-query.tsx`)
  const blogTemplate = require.resolve(`./src/templates/blog-query.tsx`)
  const homePageTemplate = path.resolve(`./src/templates/homepage-query.tsx`)

  createPage({
    path: basePath,
    component: homePageTemplate,
    context: {
      formatString,
    },
  })

  createPage({
    path: `/${basePath}/${blogPath}`.replace(/\/\/+/g, `/`),
    component: blogTemplate,
    context: {
      formatString,
    },
  })

  createPage({
    path: `/${basePath}/tags-ghost/`.replace(/\/\/+/g, `/`),
    component: ghostTagsTemplate,
  })
  // Query Ghost data
  const result = await graphql(`
  {
    ghostPosts: allGhostPost(sort: {order: ASC, fields: published_at}) {
      edges {
        node {
          slug
        }
      }
    }
    ghostTags: allGhostTag(filter: {visibility: {ne: "internal"}}) {
      edges {
        node {
          slug
        }
      }
    }
    allGhostPage(filter: {tags: {elemMatch: {name: {eq: "#ru"}}}}) {
      nodes {
        slug
        title
      }
    }
  }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  // Create pages for each Ghost post
  const ghostPosts = result.data.ghostPosts.edges
  ghostPosts.forEach(({ node }) => {
    node.url = `/${node.slug}/`.replace(/\/\/+/g, `/`)
    createPage({
      path: node.url,
      component: ghostPostTemplate,
      context: {
        slug: node.slug,
        formatString: formatString,
      },
    })
  })

  
  const ghostTags = result.data.ghostTags.edges
  ghostTags.forEach(({ node }) => {
    node.url = `/ghost-tag/${node.slug}/`.replace(/\/\/+/g, `/`)
    createPage({
      path: node.url,
      component: ghostTagTemplate,
      context: {
        slug: node.slug,
        formatString: formatString,
      },
    })
  })

  const nodes = result.data.allGhostPage.nodes

  if (nodes.length > 0) {
    nodes.forEach(( node ) => {
      createPage({
        path: `/${basePath}/${node.slug}`.replace(/\/\/+/g, `/`),
        component: pageTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  }
}
