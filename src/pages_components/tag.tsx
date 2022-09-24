import { Box, Heading, HStack, VStack, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { GoPrimitiveDot } from 'react-icons/go';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { getLanguage } from '../translations/defineLangRuntime';
import { getLangPathes, langStrings } from '../translations/langStrings';

type RelatedTag = {
  name: string;
  slug: string;
};

type Tag = {
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

type Post = {
  title: string;
  updated_at: string;
  uuid: string;
  slug: string;
  excerpt: string;
}

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
  }
};

export const Tag = ({ data, location: { pathname } }: TagPageProps) => {
  const { tag, posts, relatedTags, navigationPages } = data;
  const relatedTagsWithoutCurrent = relatedTags.nodes.filter(
    (relatedTag: RelatedTag) => relatedTag.slug !== tag.slug
  );
  const lastRelatedTag =
    relatedTagsWithoutCurrent[relatedTagsWithoutCurrent.length - 1];
  const linkToTheLastRelatedTag = `/${lastRelatedTag.slug}/`;
  const relatedTagsWithoutLast = relatedTagsWithoutCurrent.slice(0, -1);

  const site = useSiteMetadata();
  const language = getLanguage(pathname);
  const langPathes = getLangPathes(site.siteLanguage);


  return (
    <Layout navigationPages={navigationPages} language={language}>
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
          <Text>
            {langStrings.tag_generated_description[language]}
          </Text>
        </Box>
        <Box w={'70%'} paddingRight={'24'}>
          {posts.nodes.map((post) => {
            return (
              <Box paddingBottom={'4'} alignItems={'center'}>
                <Box>
                  <HStack fontSize={'3xl'}>
                    <Text as={'h2'} maxW={'80%'}>
                      <Link key={post.title} to="/post/">
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
        <HStack fontSize={'md'} w={'70%'} color={'gray.400'}>
          <Text>{langStrings.more_tags_text[language]}</Text>
          {relatedTagsWithoutLast.map((tag) => {
            const path = `/${tag.slug}/`;
            return (
              <>
                <Link to={path}>{tag.name}</Link>
                <Icon as={GoPrimitiveDot} />
              </>
            );
          })}
          <Link to={linkToTheLastRelatedTag}>{lastRelatedTag.name}</Link>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Tag;
