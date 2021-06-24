const path = require(`path`)
const withDefaults = require(`@lekoarts/gatsby-theme-minimal-blog-core/utils/default-options`)

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
      type Tag implements Node @dontInfer {
        id: ID!
        name: String!
      }
  `);
}


exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, blogPath, tagsPath, formatString, postsPrefix } = withDefaults(themeOptions)

  const postTemplate = path.resolve(`./src/templates/post-query.tsx`)
  const tagsTemplate = require.resolve(`./src/templates/tags-query.tsx`)

  createPage({
    path: `/${basePath}/tags-ghost/`.replace(/\/\/+/g, `/`),
    component: tagsTemplate,
  })
  // Query Ghost data
  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (!result.data.allGhostPost) {
    return
  }
  // Create pages for each Ghost post
  const items = result.data.allGhostPost.edges
  items.forEach(({ node }) => {
    node.url = `/${node.slug}/`
    actions.createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}