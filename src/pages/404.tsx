import * as React from 'react';
import { Layout } from '../components/Layout';
import { getLanguage } from '../translations/pathLangUtils';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { langStrings } from '../translations/langStrings';
import { Link } from '../components/Link';
import { constructPath } from '../translations/constructCommonPath';

// markup
const NotFoundPage = ({ location: { pathname } }) => {
  const language = getLanguage(pathname);
  return (
    <Layout
      language={language}
      navigationPages={{ nodes: [] }}
      location={pathname}
    >
      <VStack textAlign="center" spacing={24} minH={'md'}>
        <Heading size={'xl'}>{langStrings.page_doesn_exist[language]}</Heading>
        <Box>
          <Text>{langStrings.page_doesnt_exist_suggestion[language]}</Text>
          <Button m={8} variant={'ghost'}>
            <Link to={constructPath('', language)}>
              {langStrings.page_doesnt_exist_button[language]}
            </Link>
          </Button>
        </Box>
      </VStack>
    </Layout>
  );
};

export default NotFoundPage;
