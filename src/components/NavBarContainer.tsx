import { Flex } from '@chakra-ui/react';
import React from 'react';

function NavBarContainer({ children, ...restOfTheProps }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...restOfTheProps}
    >
      {children}
    </Flex>
  );
}

export default NavBarContainer;
