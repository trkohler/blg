import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { getLanguage } from '../translations/pathLangUtils';
import { langStrings } from '../translations/langStrings';
import { RelatedTag, RelatedTags } from '../components/RelatedTags';
import { constructPath } from '../translations/constructCommonPath';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { OgType, Seo } from '../components/Seo';

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
    href: string;
  };
};

export const Tag = ({ data, location: { pathname, href } }: TagPageProps) => {
  const { tag, posts, relatedTags, navigationPages } = data;
  const sitemetada = useSiteMetadata();
  const { postsPath } = sitemetada;

  const language = getLanguage(pathname);

  return (
    <>
      <Seo
        title={data.tag.name}
        description={data.tag.description}
        pageLanguage={language}
        contentType={OgType.Website}
        canonicalUrl={href}
      />
      <Layout
        navigationPages={navigationPages}
        language={language}
        location={pathname}
      >
        <VStack spacing={'8'} paddingBottom={'24'}>
          <Box>
            <Heading as={'h1'} size={'2xl'}>
              {tag.name}
            </Heading>
          </Box>
          <Box textAlign={'center'} color={'gray.400'}>
            <Text>{langStrings.tag_generated_description[language]}</Text>
          </Box>
          <Box px={36}>
            {posts.nodes.map((post) => {
              return (
                <Grid templateColumns="1fr 100px" gap={16} paddingBottom={12}>
                  <GridItem>
                    <Text as={'h2'} fontSize={'2xl'}>
                      <Link
                        key={post.title}
                        to={constructPath(
                          `${postsPath}/${post.slug}/`,
                          language
                        )}
                      >
                        {post.title}
                      </Link>
                    </Text>
                    <Text py={4} paddingRight={14}>
                      {post.excerpt}
                    </Text>
                  </GridItem>
                  <GridItem textAlign={'center'} paddingTop={4}>
                    <Text color={'gray.400'} fontSize="sm">
                      <span>{post.updated_at}</span>
                    </Text>
                  </GridItem>
                </Grid>
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
    </>
  );
};

export default Tag;
