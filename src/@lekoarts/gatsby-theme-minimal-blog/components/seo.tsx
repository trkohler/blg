import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"



type SchemaOrgJSONLDProps = {
  isBlogPost: boolean
  url: string
  title: string
  image: string
  description: string
  datePublished?: string
}

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
}: SchemaOrgJSONLDProps) => {
  const site = useSiteMetadata()
  const {
        siteTitle,
        siteLogo,
        siteUrl,
  } = site
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: siteTitle,
    },
  ];

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: siteTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Troy Köhler',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://trkohler.com',
            logo: siteLogo,
            name: 'Troy Köhler',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteUrl,
          },
          datePublished,
        },
      ]
    : schemaOrgJSONLD;
};


type SEOProps = {
  isBlogPost: boolean
  pageData: {
    frontmatter?: any
    excerpt?: any
    title?: string
    description?: string
    slug?: string
    date?: string
  }
  postImage?: string,
  noindex?: boolean,
  children?: React.ReactNode
} 

const SEO = (
  { 
    pageData, 
    postImage, 
    isBlogPost, 
    noindex,
    children = null 
  }: SEOProps
) => {
  const site = useSiteMetadata()
  const {
        siteTitle,
        siteUrl,
        siteDescription,
        siteImage,
        author
  } = site
  const postMeta = pageData || null;
  const title = postMeta?.title;
  const description =
    postMeta?.description || pageData?.excerpt || siteDescription;
  const image = `${siteUrl}${postImage || siteImage}`;
  const slug = postMeta?.slug;
  const url = postMeta?.slug
    ? `${siteUrl}${postMeta?.slug}`
    : siteUrl;
  const datePublished = isBlogPost ? postMeta?.date : null;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
  });
  
  return (
    <Helmet 
      title={title} 
      titleTemplate={`%s | ${siteTitle}`} 
      defer={false}
    >
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {noindex ? <meta name={`robots`} content={`noindex, nofollow`} /> : null}

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  );
};

export default SEO