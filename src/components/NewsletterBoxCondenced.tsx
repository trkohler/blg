import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { langStrings, LanguageUnion } from '../translations/langStrings';

const NewsletterBoxCondenced = ({ language }: { language: LanguageUnion }) => {
  return (
    <Flex
      justifyContent={'center'}
      bgColor={'gray.100'}
      borderRadius={'36'}
      shadow="sm"
    >
      <VStack p={[8, 24]} spacing={[2, 8]} textAlign="center">
        <Heading as={'h3'} size={['md', 'xl']} color={'gray.700'}>
          {langStrings.newsletter_small_box_heading[language]}
        </Heading>
        <Text>{langStrings.newsletter_small_box_text[language]}</Text>
        <HStack w="100%">
          <FormControl>
            <Input
              id="email"
              type="email"
              placeholder={langStrings.newsletter_placeholder[language]}
              bgColor={'white'}
            />
          </FormControl>
          <Button py={4} type="submit" bgColor={'gray.700'} color={'gray.200'} _hover={{
            bgColor: 'gray.600'
          }}>
            <Text p={6}>{langStrings.newsletter_button[language]}</Text>
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default NewsletterBoxCondenced;
