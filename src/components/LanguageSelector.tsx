import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-medatadata';
import { getLangPathes } from '../translations/langStrings';
import { getPathWithoutLang, identifyUniqueView, routeUniqueView } from '../translations/pathLangUtils';
import { Link } from './Link';

const LanguageLink = ({ children, to, ...rest }) => {
  return (
    <Box>
      <Link to={to}>{children}</Link>
    </Box>
  );
};

const LanguageSelector = ({ location }: { location?: string }) => {
  const pathWithoutTheLang = getPathWithoutLang(location);
  const { baseLanguage, postsPath, tagsPath } = useSiteMetadata();
  let commonRoute = pathWithoutTheLang;
  if (identifyUniqueView(pathWithoutTheLang, postsPath, tagsPath)) {
    commonRoute = routeUniqueView(pathWithoutTheLang);
  }
  
  const langPathes = getLangPathes(baseLanguage);

  return (
    <Stack spacing={8} direction="row">
      <LanguageLink to={`${langPathes.get('uk')}${commonRoute}`}>🇺🇦</LanguageLink>
      <LanguageLink to={`${langPathes.get('en')}${commonRoute}`}>🇬🇧</LanguageLink>
      <LanguageLink to={`${langPathes.get('ru')}${commonRoute}`}>🇷🇺</LanguageLink>
    </Stack>
  );
};

export default LanguageSelector;
