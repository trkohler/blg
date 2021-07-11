import { graphql } from "gatsby"
import TagsComponent from "../@lekoarts/gatsby-theme-minimal-blog/components/tags-ghost"

export default TagsComponent

export const query = graphql`
   query {
     allGhostTag(filter: {visibility: {ne: "internal"}}) {
        nodes {
            name
            slug
            postCount
            accent_color
        }
    }
   }
`