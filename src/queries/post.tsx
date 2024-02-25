import { graphql } from 'gatsby';
import Post from '../pages_components/post';

export const query = graphql`
  query ($slug: String!, $langSlug: String!) {
    post: ghostPost(slug: { eq: $slug }) {
      html
      og_title
      og_image
      og_description
      primary_tag {
        accent_color
        slug
        visibility
      }
      reading_time
      slug
      tags {
        name
        accent_color
        slug
        visibility
      }
      title
      updated_at(formatString: "DD MMMM, YYYY")
      uuid
      published_at(formatString: "DD MMMM, YYYY")
    }
    relatedPosts: allGhostPost(
      filter: { tags: { elemMatch: { slug: { eq: $langSlug } } } }
      limit: 3
    ) {
      nodes {
        title
        slug
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

export default Post;
