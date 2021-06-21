import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

// type SEOProps = {
//   title?: string
//   description?: string
//   pathname?: string
//   image?: string
//   children?: React.ReactNode
//   canonicalUrl?: string
// }


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
          '@context': 'https://trkohler.com',
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
          '@context': 'https://trkohler.com',
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


// const SEO = ({
//   title = ``,
//   description = ``,
//   pathname = ``,
//   image = ``,
//   children = null,
//   canonicalUrl = ``,
// }: SEOProps) => {
//   const site = useSiteMetadata()

//   const {
//     siteTitle,
//     siteTitleAlt: defaultTitle,
//     siteUrl,
//     siteDescription: defaultDescription,
//     siteLanguage,
//     siteImage: defaultImage,
//     author,
//   } = site

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     url: `${siteUrl}${pathname || ``}`,
//     image: `${siteUrl}${image || defaultImage}`,
//   }
//   return (
//     <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
//       <html lang={siteLanguage} />
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />
//       <meta property="og:title" content={seo.title} />
//       <meta property="og:url" content={seo.url} />
//       <meta property="og:description" content={seo.description} />
//       <meta property="og:image" content={seo.image} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image:alt" content={seo.description} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={seo.title} />
//       <meta name="twitter:url" content={seo.url} />
//       <meta name="twitter:description" content={seo.description} />
//       <meta name="twitter:image" content={seo.image} />
//       <meta name="twitter:image:alt" content={seo.description} />
//       <meta name="twitter:creator" content={author} />
//       <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
//       <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
//       <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
//       {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
//       <script 
//       data-name="BMC-Widget" 
//       src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" 
//       data-id="trkohler" data-description="Поддержи безумие и отвагу." 
//       data-message="Если мои труды оказались полезны, поддержи меня кофеином! :)" 
//       data-color="#5F7FFF" 
//       data-position="" 
//       data-x_margin="18" 
//       data-y_margin="18" 
//       defer>
//       </script>
//       {children}
//     </Helmet>
//   )
// }

type SEOProps = {
  isBlogPost: boolean
  postData: {
    frontmatter: any
    excerpt?: any
    title?: string
    description?: string
    slug?: string
    date?: string
  }
  postImage: string,
} 

const SEO = ({ postData, postImage, isBlogPost }: SEOProps) => {
  const site = useSiteMetadata()
  const {
        siteTitle,
        siteUrl,
        siteDescription,
        siteImage,
        author
  } = site
  const postMeta = postData || null;

  const title = postMeta?.title || siteTitle;
  const description =
    postMeta?.description || postData?.excerpt || siteDescription;
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
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

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
    </Helmet>
  );
};

export default SEO