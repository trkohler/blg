import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Flex,
  Icon,
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
  };
};

const Post = ({
  data: { post, relatedPosts, navigationPages },
  location: { pathname },
}: PostPageProps) => {
  const language = getLanguage(pathname);

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(visit_highlight_code)
    .use(rehypePrism)
    .use(stringify)
    .processSync(post.html)
    .toString();

  const correctTags = post.tags.filter((tag) => tag.visibility !== `internal`);
  const lastTag = correctTags[correctTags.length - 1];
  const linkToTheLastTag = `/${language}/tags/${lastTag.slug}/`;
  const correctTagsWithoutLast = correctTags.slice(0, -1);
  return (
    <Layout
      language={language}
      navigationPages={navigationPages}
      location={pathname}
    >
      <VStack spacing={12} py={28}>
        <Box textAlign="center">
          <Heading size={'xl'}>{post.title}</Heading>
        </Box>
        <Box>
          <HStack spacing={'8'}>
            <Text>{post.published_at}</Text>
            <Text>{post.reading_time} min read</Text>
            <HStack spacing={'0'} fontWeight={'bold'} color={'gray.800'}>
              {correctTagsWithoutLast.map((tag) => {
                const linkToTag = `/${language}/tags/${tag.slug}/`;
                return (
                  <>
                    <Link to={linkToTag}>{tag.name}</Link>
                    <Icon as={BsDot} />
                  </>
                );
              })}
              <Link to={linkToTheLastTag}>{lastTag.name}</Link>
            </HStack>
          </HStack>
        </Box>
        <Box color={'gray.400'}>
          <Text>
            {langStrings.last_time_updated[language]} {post.updated_at}
          </Text>
        </Box>
        <Flex
          dangerouslySetInnerHTML={{ __html: content }}
          px={48}
          fontSize={'xl'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={'4'}
        ></Flex>
        <NewsletterBoxCondenced language={language} />
        <RelatedPosts
          parentTitle={post.title}
          relatedPosts={relatedPosts}
          language={language}
        />
      </VStack>
    </Layout>
  );
};

export default Post;
