import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import * as React from 'react';
import { langStrings, LanguageUnion } from '../translations/langStrings';
import { ListingItem } from './ListingItem';

type ListingProps = {
  language: LanguageUnion
  items: {
    title: string;
    url: string;
    updated_at: string;
    tags: {
      name: string;
      slug: string;
      color: string;
      visibility: string;
    }[]
  }[];
};

export const Listing = ({ items, language }: ListingProps) => {
  const yearItemsMap = new Map();
  items.forEach((item) => {
    const splitted = item.updated_at.split(',');
    const year = splitted[1].trim();
    if (!yearItemsMap.has(year)) {
      yearItemsMap.set(year, []);
    }
    yearItemsMap.get(year).push(item);
    const copy = item.tags;
    item.tags = [];
    copy.forEach((tag) => {
      if (tag.visibility !== 'internal') {
        item.tags.push(tag);
      }
      item.day_written = splitted[0].trim();
    })
  });
  
  return (
    <Container minW={'80%'}>
      <Box>
      <Heading size={'lg'}>
        {langStrings.all_articles_subheader[language]}
      </Heading>
      </Box>
      
      {Array.from(yearItemsMap.entries()).map(([year, items]) => (
        <Stack py={12} fontSize='3xl'>
          <Text>{year}</Text>

          <VStack spacing={4} py={4}>
            {items.map((item) => (
              <ListingItem item={item} />
            ))}
          </VStack>
        </Stack>
      ))}
    </Container>
  );
};
