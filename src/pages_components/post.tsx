import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import { Layout } from '../components/Layout';
import rehypePrism from '@mapbox/rehype-prism';
import stringify from 'rehype-stringify';
import { Link } from '../components/Link';
import { visit_highlight_code } from '../rehype-visitors/highlight-code';
import NewsletterBoxCondenced from '../components/NewsletterBoxCondenced';
import RelatedPosts from '../components/RelatedPosts';
import { BsDot } from 'react-icons/bs';
import { langStrings } from '../translations/langStrings';
import { getLanguage } from '../translations/pathLangUtils';
import { constructPath } from '../translations/constructCommonPath';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { visit_and_fix_ghost_html } from '../rehype-visitors/fix-ghost-html';
import { GhostHtmlPost } from '../components/GhostHtmlPost';
import { OgType, Seo } from '../components/Seo';

type PostPageProps = {
  data: {
    post: {
      html: string;
      og_title: string;
      og_image: string;
      og_description: string;
      primary_tag: {
        accent_color: string;
        slug: string;
        visibility: string;
      };
      reading_time: string;
      slug: string;
      tags: {
        name: string;
        accent_color: string;
        slug: string;
        visibility: string;
      }[];
      title: string;
      updated_at: string;
      uuid: string;
      published_at: string;
    };
    relatedPosts: {
      nodes: {
        title: string;
        slug: string;
      }[];
    };
    navigationPages: {
      nodes: {
        slug: string;
        title: string;
      }[];
    };
  };
  location: {
    pathname: string;
    href: string;
  };
};

const Post = ({
  data: { post, relatedPosts, navigationPages },
  location: { pathname, href },
}: PostPageProps) => {
  const language = getLanguage(pathname);
  const sitemetada = useSiteMetadata();
  const { tagsPath } = sitemetada;

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(visit_highlight_code)
    .use(visit_and_fix_ghost_html, { title: post.title, language })
    .use(rehypePrism)
    .use(stringify)
    .processSync(post.html)
    .toString();

  const correctTags = post.tags.filter((tag) => tag.visibility !== `internal`);
  const lastTag = correctTags[correctTags.length - 1];
  const correctTagsWithoutLast = correctTags.slice(0, -1);
  const accentGray = useColorModeValue('gray.500', 'gray.400');
  return (
    <>
      <Seo
        title={post.title}
        description={post.og_description}
        pageLanguage={language}
        contentType={OgType.Article}
        canonicalUrl={href}
      />
      <Layout
        language={language}
        navigationPages={navigationPages}
        location={pathname}
      >
        <VStack spacing={12} align={'stretch'} p={[6, 28]}>
          <Box textAlign="center">
            <Heading size={'xl'}>{post.title}</Heading>
          </Box>

          <HStack spacing={'8'} justifyContent={'center'}>
            <Text>{post.published_at}</Text>
            <Text>{post.reading_time} min read</Text>
            <HStack spacing={'0'} fontWeight={'bold'} color={accentGray}>
              {correctTagsWithoutLast.map((tag) => {
                return (
                  <>
                    <Link
                      to={constructPath(`${tagsPath}/${tag.slug}/`, language)}
                    >
                      {tag.name}
                    </Link>
                    <Icon as={BsDot} />
                  </>
                );
              })}
              <Link
                to={constructPath(`${tagsPath}/${lastTag.slug}/`, language)}
              >
                {lastTag.name}
              </Link>
            </HStack>
          </HStack>

          <Box color={'gray.400'} textAlign="center">
            <Text>
              {langStrings.last_time_updated[language]} {post.updated_at}
            </Text>
          </Box>
          <GhostHtmlPost content={content} />
          <NewsletterBoxCondenced language={language} />
          <RelatedPosts
            parentTitle={post.title}
            relatedPosts={relatedPosts}
            language={language}
          />
        </VStack>
      </Layout>
    </>
  );
};

export default Post;
