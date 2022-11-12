import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { getLanguage } from '../translations/pathLangUtils';
import { langStrings } from '../translations/langStrings';
import { RelatedTag, RelatedTags } from '../components/RelatedTags';
import { constructPath } from '../translations/constructCommonPath';
import { useSiteMetadata } from '../hooks/use-site-medatadata';

type Tag = {
  name: string;
  slug: string;
  description: string;
  postCount: number;
};

type Post = {
  title: string;
  updated_at: string;
  uuid: string;
  slug: string;
  excerpt: string;
};

type TagPageProps = {
  data: {
    tag: Tag;
    relatedTags: {
      nodes: RelatedTag[];
    };
    posts: {
      nodes: Post[];
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

export const Tag = ({ data, location: { pathname } }: TagPageProps) => {
  const { tag, posts, relatedTags, navigationPages } = data;
  const sitemetada = useSiteMetadata();
  const { postsPath } = sitemetada;

  const language = getLanguage(pathname);

  return (
    <Layout
      navigationPages={navigationPages}
      language={language}
      location={pathname}
    >
      <VStack minH={'60vh'} spacing={'12'} paddingBottom={'24'}>
        <Box>
          <Heading as={'h1'} size={'2xl'}>
            {tag.name}
          </Heading>
        </Box>
        <Box
          textAlign={'center'}
          w={'60%'}
          alignItems={'center'}
          color={'gray.400'}
        >
          <Text>{langStrings.tag_generated_description[language]}</Text>
        </Box>
        <Box w={'70%'} paddingRight={'24'}>
          {posts.nodes.map((post) => {
            return (
              <Box paddingBottom={'4'} alignItems={'center'}>
                <Box>
                  <HStack fontSize={'3xl'}>
                    <Text as={'h2'} maxW={'80%'}>
                      <Link key={post.title} to={constructPath(`${postsPath}/${post.slug}/`, language)}>
                        {post.title}
                      </Link>
                    </Text>
                    <Text fontSize={'sm'} color={'gray.400'}>
                      <span>{post.updated_at}</span>
                    </Text>
                  </HStack>
                </Box>
                <Box maxW={'60%'}>
                  <Text>{post.excerpt}</Text>
                </Box>
              </Box>
            );
          })}
        </Box>
        <RelatedTags
          currentTag={tag}
          language={language}
          relatedTags={relatedTags.nodes}
        />
      </VStack>
    </Layout>
  );
};

export default Tag;
