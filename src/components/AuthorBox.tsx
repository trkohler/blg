import {
  HStack,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { GrLinkedinOption } from 'react-icons/gr';
import { getLanguage } from '../translations/pathLangUtils';
import { LanguageUnion, langStrings } from '../translations/langStrings';

export const AuthorBox = ({ language }: { language: LanguageUnion }) => {
  const accentGray = useColorModeValue('gray.500', 'gray.400');
  return (
    <VStack
      align={'stretch'}
      minW={'300px'}
      maxW={'300px'}
      pl={4}
      fontSize={'xs'}
      display={['none', 'none', 'none', 'flex']}
    >
      <Heading size={'xs'} as={'h3'}>
        {langStrings.author_box_about_the_author[language]}
      </Heading>
      <Text color={accentGray}>{langStrings.author_box_text[language]}</Text>
      <HStack justifyContent={'right'} pt={4} px={4}>
        <ChakraLink
          href="https://www.linkedin.com/in/trkohler/"
          target="_blank"
        >
          <Icon as={GrLinkedinOption}></Icon>
        </ChakraLink>
      </HStack>
    </VStack>
  );
};
