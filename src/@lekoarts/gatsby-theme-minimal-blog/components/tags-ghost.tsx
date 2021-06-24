/** @jsx jsx */
import { jsx, Link as TLink, Heading } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import SEO from "./seo"

type TagsProps = {
    data: {
        allGhostTag: 
        {
            nodes:{
                name: string
                slug: string
                postCount: number
                accent_color: string
            }[]
        }
    }
}

const Tags = ({ data }: TagsProps) => {
    const { tagsPath, basePath } = useMinimalBlogConfig()
    const tags = data.allGhostTag.nodes

    return (
        <Layout>
            <SEO 
            isBlogPost={false}
            postData={{}}
            />
            <Heading as='h1' variant="styles.h3">Тэги</Heading>
            <Box mt={[4, 5]}>
                {tags.map((listItem) => (
                    <Flex key={listItem.name} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
                        <TLink
                            as={Link}
                            sx={{ variant: `links.listItem`, mr: 2 }}
                            to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.slug)}`)}
                        >
                            {listItem.name} <span sx={{ color: `secondary` }}>({listItem.postCount})</span>
                        </TLink>
                    </Flex>
                ))}
            </Box>
        </Layout>
    )
}

export default Tags