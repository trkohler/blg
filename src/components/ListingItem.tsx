import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from './Link';
import { AiFillEye } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { constructPath } from '../translations/constructCommonPath';
import { LanguageUnion } from '../translations/langStrings';
import { useSiteMetadata } from '../hooks/use-site-medatadata';

type ListingItemProps = {
  item: {
    uuid: string;
    title: string;
    slug: string;
    day_written: string;
    tags: {
      name: string;
      slug: string;
      accent_color: string;
    }[];
  };
  language: LanguageUnion
};

export const ListingItem = ({ item, language }: ListingItemProps) => {
  const { postsPath } = useSiteMetadata();

  return (
    <HStack
      key={item.uuid}
      fontSize={'lg'}
      fontWeight={'light'}
      spacing={8}
      py={4}
      w={'100%'}
    >
      <Box minW={'100px'}>
        <Text>{item.day_written}</Text>
      </Box>
      <Box w={'80%'}>
        <Link to={constructPath(`${postsPath}/${item.slug}/`, language)}>
          <Text>{item.title}</Text>
        </Link>
      </Box>

      {/* <HStack
      fontSize={'0.5em'}
      fontWeight={'bold'} 
      w={'30%'}
      justifyContent={'center'}
      textAlign={'center'}
      >
        {tagsExceptLast.map((tag) => (
          <>
            <Text color={tag.accent_color ? tag.accent_color : `black`}>
              <Link to={tag.slug}>{tag.name}</Link>
            </Text>
            <Icon as={BsDot} />
          </>
        ))}
        {lastTag &&
          <Text color={lastTag.accent_color ? lastTag.accent_color : `black`}>
            <Link to={lastTag.slug}>{lastTag.name}</Link>
          </Text>
        }
      </HStack> */}
    </HStack>
  );
};
