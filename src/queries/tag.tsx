import { graphql } from 'gatsby';
import Tag from '../pages_components/tag';

export const query = graphql`
  query tagBySlug($slug: String!, $preparedGlob: String!, $langSlug: String!) {
    tag: ghostTag(slug: { eq: $slug }) {
      name
      slug
      description
      postCount
    }
    posts: allGhostPost(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        title
        updated_at(formatString: "DD MMMM, YYYY")
        uuid
        slug
        excerpt
      }
    }
    relatedTags: allGhostTag(
      filter: { description: { glob: $preparedGlob } }
      limit: 3
    ) {
      nodes {
        name
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

export default Tag;
