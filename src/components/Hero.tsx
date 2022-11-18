import { Container, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { langStrings, LanguageUnion } from '../translations/langStrings';

const Hero = ({ language }: { language: LanguageUnion }) => {
  const accentColor = useColorModeValue('gray.900', 'gray.200');
  const defaultColor = useColorModeValue('gray.300', 'gray.500');
  return (
    <Container maxW={'3xl'}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        color={defaultColor}
      >
        <Text as={'span'} color={accentColor}>
          {langStrings.hero_first_part[language]}
        </Text>&nbsp;
        {langStrings.hero_second_part[language]}
      </Heading>
    </Container>
  );
};

export default Hero;
