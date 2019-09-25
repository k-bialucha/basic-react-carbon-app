import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './HeaderText.style';

const HeaderText = ({ text }) => {
  return <Text>{text}</Text>;
};

HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderText;
