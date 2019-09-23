import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Content.style';

const Content = ({ text, borderColor, italic }) => {
  return (
    <Container borderColor={borderColor} italic={italic}>
      {text}
    </Container>
  );
};

Content.propTypes = {
  text: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  italic: PropTypes.bool,
};

export default Content;
