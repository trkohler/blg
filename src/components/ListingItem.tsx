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
};

export const ListingItem = ({ item }: ListingItemProps) => {
  const color = useColorModeValue('gray.300', 'gray.500');
  const tagsExceptLast = item.tags.slice(0, -1);
  const lastTag = item.tags[item.tags.length - 1];
  return (
    <HStack
      key={item.uuid}
      fontSize={'lg'}
      fontWeight={'light'}
      spacing={8}
      // borderColor={'black'}
      // borderStyle={'solid'}
      // borderWidth={'2px'}
      py={4}
      w={'100%'}
    >
      <Box minW={'100px'}>
        <Text>{item.day_written}</Text>
      </Box>
      <Box w={'80%'}>
        <Link to={item.slug}>
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
