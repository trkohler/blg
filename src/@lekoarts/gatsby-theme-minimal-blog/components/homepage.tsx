/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import SEO from "./seo"

type PostsProps = {
    posts: {
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
    [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
    const { basePath, blogPath } = useMinimalBlogConfig()

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
            <Listing posts={posts} showTags={false} />
            {/* <List>
                <Bottom />
            </List> */}
        </Layout>
    )
}

export default Homepage