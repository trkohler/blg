import { graphql } from 'gatsby';
import AllPosts from '../pages_components/all_posts';

export const query = graphql`
  query($langSlug: String!) {
    posts: allGhostPost(
      sort: { fields: created_at, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $langSlug } } } }
    ) {
      nodes {
        updated_at(formatString: "DD MMMM, YYYY")
        uuid
        slug
        title
        excerpt
        timeToRead: reading_time
        tags {
          name
          slug
          accent_color
          visibility
        }
      }
    }
    navigationPages: allGhostPage(
      filter: { tags: { elemMatch: { slug: { eq: $langSlug } } } }
    ) {
      nodes {
        slug
        title
      }
    }
  }
`;

export default AllPosts;
