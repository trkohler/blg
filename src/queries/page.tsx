import { graphql } from "gatsby";
import { Page } from "../pages_components/page";

export const query = graphql`
  query PageQuery($slug: String!, $langSlug: String!) {
    page: ghostPage(slug: { eq: $slug }) {
      slug
      title
      tags {
        slug
        visibility
      }
      html
      og_description
      og_image
      og_title
      reading_time
      updated_at(formatString: "DD MMMM, YYYY")
      published_at(formatString: "DD MMMM, YYYY")
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

export default Page;
