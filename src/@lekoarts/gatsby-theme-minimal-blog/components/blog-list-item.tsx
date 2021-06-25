/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "./item-tags"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
    const { basePath } = useMinimalBlogConfig()
    return (
    <Box mb={4}>
      {console.log(post.slug)}
        <TLink
          as={Link}
          sx={{ fontSize: [1, 2, 3], color: `text` }}
          to={replaceSlashes(`/${basePath}/${post.slug}/`)}
        >
            {post.title}
        </TLink>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)}

export default BlogListItem