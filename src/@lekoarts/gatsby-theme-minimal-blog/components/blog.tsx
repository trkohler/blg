/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import SEO from "./seo"

type PostsProps = {
    data: {
        posts: {
            nodes: {
                slug: string
                title: string
                date: string
                excerpt: string
                description: string
                timeToRead?: number
                tags?: {
                    name: string
                    slug: string
                }[]
            }[]
        }
    }
}

const Blog = ({data: { posts }}: PostsProps) => {
    const { tagsPath, basePath, blogPath } = useMinimalBlogConfig()
    let normalizedPosts = posts.nodes;
    normalizedPosts.map(post => {
        let tags_allowed = post.tags.filter(tag => !tag.name.includes("#"))
        post.tags = tags_allowed 
    })

    return (
        <Layout>
            <SEO
            pageData={{
                title: "Читать все посты",
                tail: blogPath,
            }}
            isBlogPost={false}
            />
            <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
                <Heading as='h1' variant="styles.h2">Блог</Heading>
                <TLink as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/tags-ghost/`)}>
                    Посмотреть все тэги
            </TLink>
            </Flex>
            <Listing posts={normalizedPosts} sx={{ mt: [4, 5] }} />
        </Layout>
    )
}

export default Blog