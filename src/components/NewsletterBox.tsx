import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  List,
  ListIcon,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Icon,
  useColorModeValue,
  Stack,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from './Link';
import { FaArrowRight } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { langStrings, LanguageUnion } from '../translations/langStrings';

const NewsletterBox = ({ language }: { language: LanguageUnion }) => {
  const color = useColorModeValue('gray.600', 'gray.200');
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  return (
    <Container maxW={'4xl'} color={color}>
      <HStack py={12}>
        <Icon as={SiMinutemailer} color="blue.500" />
        <Heading size={'lg'}>{langStrings.newsletter_title[language]}</Heading>
      </HStack>
      <Box
        p="20"
        borderRadius={'3xl'}
        boxShadow="lg"
        bgColor={bgColor}
        fontSize="lg"
      >
        <VStack spacing="6" px={16}>
          <Heading size={'md'} as="h3">
            Get a behind the scenes look at what I'm currently learning,
            exploring, and creating.
          </Heading>
          <Text w={'100%'}>
            Subscribe to <Link to={'/'}>my newsletter</Link> to receive a
            monthly digest containing:
          </Text>

          <List spacing={3} w={'100%'}>
            <ListItem>
              <ListIcon as={FaArrowRight} color="blue.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={FaArrowRight} color="blue.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={FaArrowRight} color="blue.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
          <HStack w="100%">
            <FormControl>
              <Input
                id="email"
                type="email"
                placeholder={langStrings.newsletter_placeholder[language]}
              />
            </FormControl>
            <Button py={4} type="submit">
              {langStrings.newsletter_button[language]}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default NewsletterBox;
