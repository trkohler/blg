import { graphql } from "gatsby";

export const query = graphql`
   query ($slug: String!) {
    ghostTag(slug: {eq: $slug}) {
        name
        postCount
        accent_color
    }
    ghostPost(tags: {elemMatch: {slug: {eq: $slug}}}) {
        title
    }
}

`