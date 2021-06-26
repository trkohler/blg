import { graphql } from "gatsby"
import PostComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/post"

export default PostComponent

export const query = graphql`
  query ($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
    }
  }
`
