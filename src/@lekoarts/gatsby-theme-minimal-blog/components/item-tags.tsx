import * as React from "react"
import { Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
 

type TagsProps = {
  tags: {
    name: string
    slug: string
    tail?: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <TLink as={Link} to={tag.tail ? replaceSlashes(`/${basePath}/${tag.tail}`) : `/${tagsPath}/${tag.slug}`}>
            {tag.name}
          </TLink>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags