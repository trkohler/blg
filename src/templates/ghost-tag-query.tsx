import { graphql } from "gatsby";
import TagGhost from "../@lekoarts/gatsby-theme-minimal-blog/components/tag-ghost";

export default TagGhost

export const tagQuery = graphql`
   query ($slug: String!, $formatString: String!) {
    tag:ghostTag(slug: {eq: $slug}) {
    name
    slug
  }
  posts:allGhostPost(filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
    nodes {
    html
      feature_image
      slug
      title
      date:created_at(locale: "en-US", formatString: $formatString)
      excerpt
      internal {
        description
      }
      tags {
        slug
        name
      }
    }
  }
}

`