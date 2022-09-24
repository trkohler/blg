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
      w={'70%'}
      justifyContent={'center'}
      bgColor={'gray.100'}
      borderRadius={'36'}
      shadow="sm"
    >
      <VStack p={'24'} spacing={'8'}>
        <Heading as={'h3'} size={'xl'} color={'gray.700'}>
          {langStrings.newsletter_small_box_heading[language]}
        </Heading>
        <Text align={'center'}>
          {langStrings.newsletter_small_box_text[language]}
        </Text>
        <HStack w="100%">
          <FormControl>
            <Input
              id="email"
              type="email"
              placeholder={langStrings.newsletter_placeholder[language]}
              bgColor={'white'}
            />
          </FormControl>
          <Button py={4} type="submit" color={'gray.700'}>
            {langStrings.newsletter_button[language]}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default NewsletterBoxCondenced;
