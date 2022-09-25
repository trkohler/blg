import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSiteDefaultLang } from '../hooks/use-default-lang';
import { getLangPathes } from '../translations/langStrings';
import { getPathWithoutLang } from '../translations/pathLangUtils';
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
  const defaultLang = useSiteDefaultLang();
  const langPathes = getLangPathes(defaultLang);

  return (
    <Stack spacing={8} direction="row">
      <LanguageLink to={`${langPathes.get('uk')}${pathWithoutTheLang}`}>🇺🇦</LanguageLink>
      {/* <LanguageLink to={`${langPathes.get('en')}${pathWithoutTheLang}`}>🇬🇧</LanguageLink> */}
      <LanguageLink to={`${langPathes.get('ru')}${pathWithoutTheLang}`}>🇷🇺</LanguageLink>
    </Stack>
  );
};

export default LanguageSelector;
