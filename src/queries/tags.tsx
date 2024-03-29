import { graphql } from "gatsby";
import { Tags } from "../pages_components/tags";

export const query = graphql`
  query ($preparedGlob: String!, $langSlug: String!) {
    tags: allGhostTag(
      filter: {
        visibility: { ne: "internal" }
        description: { glob: $preparedGlob }
      }
    ) {
      nodes {
        name
        visibility
        ghostId
        description
        accent_color
        slug
        count {
          posts
        }
      }
    }
    navigationPages: allGhostPage(
      filter: {
        tags: {
          elemMatch: { slug: { eq: $langSlug }, name: { eq: "#navigation" } }
        }
      }
    ) {
      edges {
        node {
          title
          slug
          tags {
            slug
            name
          }
        }
      }
    }
  }
`;
export default Tags;
