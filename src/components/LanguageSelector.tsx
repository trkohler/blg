import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from './Link';

const LanguageLink = ({ children, to, ...rest }) => {
  return (
    <Box>
      <Link to={to}>{children}</Link>
    </Box>
  );
};

const LanguageSelector = ({ location = null }) => {
  return (
    <Stack spacing={8} direction="row">
      <LanguageLink to="/">🇺🇦</LanguageLink>
      <LanguageLink to="/">🇬🇧</LanguageLink>
      <LanguageLink to="/">🇷🇺</LanguageLink>
    </Stack>
  );
};

export default LanguageSelector;
