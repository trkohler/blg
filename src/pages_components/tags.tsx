import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from '../components/Link';
import { getLanguage } from '../translations/pathLangUtils';
import { langStrings } from '../translations/langStrings';
import { OgType, Seo } from '../components/Seo';

type TagsPageProps = {
  data: {
    tags: {
      nodes: {
        name: string;
        visibility: string;
        ghostId: string;
        description: string;
        accent_color: string;
        slug: string;
        count: {
          posts: number;
        };
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

export const Tags = ({
  data: {
    tags: { nodes },
    navigationPages,
  },
  location: { pathname, href },
}: TagsPageProps) => {
  const language = getLanguage(pathname);

  return (
    <>
      <Seo
        title={langStrings.tags_listing_title[language]}
        description={langStrings.tags_listing_description[language]}
        pageLanguage={language}
        contentType={OgType.Website}
        canonicalUrl={href}
      />
      <Layout
        navigationPages={navigationPages}
        language={language}
        location={pathname}
      >
        <VStack px={4} minHeight={'md'}>
          <Box textAlign={'center'}>
            <Heading as={'h1'}>
              {langStrings.all_available_tags_heading[language]}
            </Heading>
          </Box>
          <Box w={'80%'} py={8}>
            {nodes.map((tag) => {
              return (
                <HStack color={'gray.400'} justifyContent={'space-between'}>
                  <HStack>
                    <Heading
                      color={tag.accent_color ? tag.accent_color : `gray.600`}
                      as={'h2'}
                      fontSize={['sm', '2xl']}
                    >
                      <Link key={tag.name} to={tag.slug}>
                        {tag.name}
                      </Link>
                    </Heading>
                    <Text fontSize={'xs'}>{tag.count.posts}</Text>
                  </HStack>
                  <Text fontSize={['sm', 'md']}>
                    {langStrings.last_time_updated[language]}{' '}
                    <span>{new Date().toDateString()}</span>
                  </Text>
                </HStack>
              );
            })}
          </Box>
        </VStack>
      </Layout>
    </>
  );
};
