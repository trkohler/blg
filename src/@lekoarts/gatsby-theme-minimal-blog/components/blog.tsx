/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import SEO from "./seo"
import Layout from "./layout"
import Listing from "./listing"

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