import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { Heading } from "theme-ui"
import SEO from "./seo"

type GhostPostProps = {
    data: {
        ghostPost: {
            excerpt: string
            feature_image?: string
            html: any
            reading_time: number
            title: string
            updated_at: string
            slug: string
        }
    }
}

// let Post = ({ data }: GhostPostProps) => {
//   const post = data.ghostPost
//   return (
//     <>
//       <article className="post">
//         {post.feature_image ? (
//           <img src={post.feature_image} alt={post.title} />
//         ) : null}
//         <h1>{post.title}</h1>
//         <section dangerouslySetInnerHTML={{ __html: post.html }} />
//       </article>
//     </>
//   )
// }

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

export default function Post({ data }: GhostPostProps) {
    const post = data.ghostPost
    return (
    <Layout>
    <SEO
      postData={{
        frontmatter: {
          date: post.updated_at,
          title: post.title,
          description: post.excerpt,
          image: post.feature_image,
        },
        excerpt: post.excerpt,
        title: post.title,
        description: post.excerpt,
        slug: post.slug,
        date: post.updated_at
      }}
      postImage={post.feature_image}
      isBlogPost={true}
    />
    <Heading as='h1' variant="styles.h2">{post.title}</Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.updated_at}</time>
      {/* {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )} */}
      {/* {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>} */}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
      }}
    >
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  </Layout>
  )
}