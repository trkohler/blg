import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Link';
import { Text } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to, ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
