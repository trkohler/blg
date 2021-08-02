/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import Layout from "./layout"
import SEO from "./seo"

type PageProps = {
  data: {
    page: {
      html: string
      title: string
      slug: string
      excerpt: string
    }
  }
  [key: string]: any
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO
    isBlogPost={false}
    pageData={{
        title: page.title,
        tail: page.slug,
    }}
    />
    <Heading as="h1" variant="styles.h1">
      {page.title}
    </Heading>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `post.ghostPost`,
      }}
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
  </Layout>
)

export default Page
