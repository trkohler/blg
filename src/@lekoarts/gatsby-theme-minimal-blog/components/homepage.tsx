/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import SEO from "./seo"
import Listing from "./listing"

type PostsProps = {
    data: {
        posts: {
            nodes: {
                slug: string
                title: string
                excerpt: string
                timeToRead: number
                description: string
                tags: {
                    name: string
                    slug: string
                }[]
                date: string
            }[]
        }
    }
}

const Homepage = ({ data: { posts }}: PostsProps) => {
    const { basePath, blogPath } = useMinimalBlogConfig()
    const normalizedPosts = posts.nodes

    return (
        <Layout>
            <SEO
            isBlogPost={false}
            pageData={{
                title: "Знакомство"
            }}
            />
            <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
                <Hero />
            </section>
            <Title text="Последние посты">
                <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Читать все</Link>
            </Title>
            <Listing posts={normalizedPosts} showTags={false} />
        </Layout>
    )
}

export default Homepage