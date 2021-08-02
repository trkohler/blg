import { graphql } from "gatsby"
import HomepageComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/homepage"

export default HomepageComponent

export const query = graphql`
  query ($formatString: String!) {
      posts:allGhostPost(
        sort: {fields: created_at, order: DESC}, limit: 3,
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