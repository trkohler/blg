import { graphql } from "gatsby"
import HomepageComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
      posts:allGhostPost(sort: {fields: created_at, order: DESC}, limit: 3) {
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
        date:created_at(formatString: "dddd, d MMMM, yyyy")
      }
    }
  }
`