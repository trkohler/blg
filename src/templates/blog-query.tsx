import { graphql } from "gatsby"
import BlogComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/blog"

export default BlogComponent

export const query = graphql`
  query ($formatString: String!) {
    posts:allGhostPost(
      sort: {fields: created_at, order: DESC},
      filter: {tags: {elemMatch: {name: {eq: "#ru"}}}}
      ) {
      nodes {
        slug
        title
        excerpt
        description: excerpt
        timeToRead:reading_time
        tags {
          name
          slug
        }
        date:created_at(formatString: $formatString)
      }
    }
  }
`