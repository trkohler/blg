import {
  Box,
  Flex,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { constructPath } from '../translations/constructCommonPath';
import { langStrings, LanguageUnion } from '../translations/langStrings';
import { Link } from './Link';

type RelatedPost = {
  title: string;
  slug: string;
}

type RelatedPostsProps = {
  parentTitle: string;
  relatedPosts: {
    nodes: RelatedPost[];
  };
  language: LanguageUnion
}

const RelatedPosts = ({ parentTitle, relatedPosts, language }: RelatedPostsProps) => {
  const sitemetada = useSiteMetadata();
  const { postsPath } = sitemetada;
  
  const filteredPosts = relatedPosts.nodes.filter(
    (post) => post.title !== parentTitle
  );
  return (
    <Flex
      w={'70%'}
      justifyContent={'center'}
      textAlign={'center'}
      fontSize={'xl'}
      color={'gray.800'}
      flexDirection={'row'}
    >
      <Box>
        <Heading fontWeight={'bold'} as={'h4'} size={'md'}>
          {langStrings.related_posts_subheading[language]}
        </Heading>
        <UnorderedList
          listStyleType={'none'}
          spacing={'4'}
          py={'4'}
          m={'0'}
          px={'0'}
        >
          {filteredPosts.map((post) => {
            const linkToPost = constructPath(`${postsPath}/${post.slug}/`, language);
            return (
            <ListItem>
              <Link to={linkToPost}>{post.title}</Link>
            </ListItem>
          )})}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default RelatedPosts;
