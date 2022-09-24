import { Link as GatsbyLink } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children }: LinkProps) => (
  <ChakraLink as={GatsbyLink} to={to}>
    {children}
  </ChakraLink>
);
