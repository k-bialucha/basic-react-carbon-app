import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Text } from './HeaderText.style';

import ThemeContext from '../data/ThemeContext';

const HeaderText = ({ text }) => {
  const { variables } = useContext(ThemeContext);
  return <Text theme={variables}>{text}</Text>;
};

HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderText;
