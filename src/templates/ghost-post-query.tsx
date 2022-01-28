import { graphql } from "gatsby";
import PostComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/post-ghost"

export default PostComponent

export const postQuery = graphql`
  query($slug: String!, $formatString: String!) {
    ghostPost(slug: { eq: $slug }) {
    created_at(locale: "en-US", formatString: $formatString)
    feature_image
    excerpt
    slug
    title
    html
    childHtmlRehype {
      html
    }
    tags {
      name
      slug
    }
}
}
`