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

  const ghostPostTemplate = path.resolve(`./src/templates/ghost-post-query.tsx`)
  const ghostTagsTemplate = require.resolve(`./src/templates/ghost-tags-query.tsx`)
  const ghostTagTemplate = path.resolve(`./src/templates/ghost-tag-query.tsx`)
  const postTemplate = require.resolve(`./src/templates/post-query.tsx`)

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
    ghostTags: allGhostTag {
      edges {
        node {
          slug
        }
      }
    }
    allPost(sort: {fields: date, order: DESC}) {
      nodes {
        slug
      }
    }
    allPage {
      nodes {
        slug
      }
    }
    tags: allPost(sort: {fields: tags___name, order: DESC}) {
      group(field: tags___name) {
        fieldValue
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
    actions.createPage({
      path: node.url,
      component: ghostPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  
  const ghostTags = result.data.ghostTags.edges
  ghostTags.forEach(({node}) => {
    node.url = `/ghost-tag/${node.slug}/`.replace(/\/\/+/g, `/`)
    actions.createPage({
      path: node.url,
      component: ghostTagTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  const posts = result.data.allPost.nodes

  posts.forEach((post) => {
    createPage({
      path: `/${postsPrefix}${post.slug}`.replace(/\/\/+/g, `/`),
      component: postTemplate,
      context: {
        slug: post.slug,
        formatString,
      },
    })
  })
}
