/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "./layout"
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Heading } from "theme-ui"
import SEO from "./seo"
import ItemTags from "./item-tags"
import {SubscriptionForm} from "./email_subscription"

type GhostPostProps = {
    data: {
        ghostPost: {
            excerpt: string
            feature_image: string
            html: any
            title: string
            created_at: string
            slug: string
            tags: {
              slug: string
              name: string
              tail?: string
            }[]
            childHtmlRehype: {
              tableOfContents: {
                id: string
                heading: string
              }[]
            }
        }
    }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

export default function Post({ data }: GhostPostProps) {
    const post = data.ghostPost
    const readingTime = readingTimeHelper({html: post.html, feature_image: [post.feature_image]})
    let tags = post.tags
    tags.forEach(tag => {
      tag.tail = `/ghost-tag/${tag.slug}`
    })
    tags = tags.filter(tag => !tag.name.includes("#"))
    return (
    <Layout>
    <SEO
      pageData={{
        frontmatter: {
          date: post.created_at,
          title: post.title,
          description: post.excerpt,
          image: post.feature_image,
        },
        excerpt: post.excerpt,
        title: post.title,
        description: post.excerpt,
        slug: post.slug,
        date: post.created_at
      }}
      postImage={post.feature_image}
      isBlogPost={true}
    />
    <Heading as='h1' variant="post.ghostPost.h2">{post.title}</Heading>
    <p 
     sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}
    >
      <time>{post.created_at}</time>
      {tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={tags} />
        </React.Fragment>
      )}
      {readingTime && ` — `}
      {readingTime && <span>{readingTime}</span>}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `post.ghostPost`,
      }}
      dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <SubscriptionForm tags={["reading books", ]} />
  </Layout>
  )
}