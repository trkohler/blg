import { graphql } from "gatsby"
import PageComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/page"

export default PageComponent

export const query = graphql`
  query ($slug: String!) {
    page:ghostPage(slug: {eq: $slug}) {
      html
      slug
      title
      excerpt
  }
}
`
