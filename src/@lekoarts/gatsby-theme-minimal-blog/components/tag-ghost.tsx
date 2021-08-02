/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Layout from "./layout"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Listing from "./listing"
import SEO from "./seo"
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import {capitalize} from "../../../utils/myFunctions"

type TagGhostProps = {
  data: {
    tag: {
      name: string
      slug: string
    }
    posts: {
      nodes: {
        featuredImage: string
        html: string
        title: string
        slug: string
        date: string
        excerpt: string
        internal: {
          description: string
        }
        tags: {
          name: string
          slug: string
        }[]
      }[]
    }
  }
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const TagGhost = ({ data: {tag, posts}, pageContext }: TagGhostProps) => {
  const { basePath } = useMinimalBlogConfig()
  let normalizedPosts = []
  for (let i = 0; i < posts.nodes.length; i++) {
    normalizedPosts.push({
      title: posts.nodes[i].title,
      description: posts.nodes[i].internal.description ? posts.nodes[i].internal.description : "default description",
      slug: posts.nodes[i].slug,
      date: posts.nodes[i].date,
      excerpt: posts.nodes[i].excerpt,
      tags: posts.nodes[i].tags,
      timeToRead: readingTimeHelper({html: posts.nodes[i].html, feature_image: [posts.nodes[i].featuredImage]})
    })
  }
  normalizedPosts.map(post => {
    let tags_allowed = post.tags.filter(tag => !tag.name.includes("#"))
    post.tags = tags_allowed 
})

  return (
    <Layout>
      <SEO
      pageData={{
        title: tag.name
      }}
      isBlogPost={false}
      />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h2" sx={{ marginY: 2 }}>
          {capitalize(tag.name)}
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/tags-ghost/`)}
        >
          View all tags
        </TLink>
      </Flex>
      <Listing posts={normalizedPosts} showTags={false} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default TagGhost
