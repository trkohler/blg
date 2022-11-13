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
  useColorModeValue,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { langStrings, LanguageUnion } from '../translations/langStrings';

const NewsletterBoxCondenced = ({ language }: { language: LanguageUnion }) => {
  const [status, setStatus] = useState('');
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const bgGray = useColorModeValue('gray.100', 'gray.700');
  const headingGray = useColorModeValue('gray.700', 'gray.100');
  const inputBg = useColorModeValue('white', 'gray.600');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }

      setStatus('ERROR');
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <Flex
      justifyContent={'center'}
      bgColor={bgGray}
      borderRadius={'36'}
      shadow="sm"
    >
      <VStack p={[8, 24]} spacing={[2, 8]} textAlign="center">
        <Heading as={'h3'} size={['md', 'xl']} color={headingGray}>
          {langStrings.newsletter_small_box_heading[language]}
        </Heading>
        <Text>{langStrings.newsletter_small_box_text[language]}</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <HStack>
              <Input
                id="email_address"
                name="email_address"
                type="email"
                placeholder={langStrings.newsletter_placeholder[language]}
                bgColor={inputBg}
                isRequired
              />

              <Button
                py={4}
                type="submit"
                bgColor={'gray.700'}
                color={'gray.200'}
                _hover={{
                  bgColor: 'gray.600',
                }}
              >
                <Text p={6}>{langStrings.newsletter_button[language]}</Text>
              </Button>
            </HStack>
            {status === 'SUCCESS' && (
              <FormHelperText color={'green.400'}>
                {langStrings.subscription_success[language]}
              </FormHelperText>
            )}
            {status === 'ERROR' && (
              <FormErrorMessage>
                {langStrings.subscription_error[language]}
              </FormErrorMessage>
            )}
          </FormControl>
        </form>
      </VStack>
    </Flex>
  );
};

export default NewsletterBoxCondenced;
