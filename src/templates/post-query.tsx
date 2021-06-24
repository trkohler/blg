import { graphql } from "gatsby";
import PostComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/post-ghost"

export default PostComponent

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
    created_at
    feature_image
    excerpt
    slug
    title
    html
}
}
`