import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Content.style';

const Content = ({ text, borderColor }) => {
  return <Container borderColor={borderColor}>{text}</Container>;
};

Content.propTypes = {
  text: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

export default Content;
