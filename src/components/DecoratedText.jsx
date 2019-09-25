import React from 'react';
import PropTypes from 'prop-types';

const DecoratedText = ({ text, separator }) => {
  const textDecorated = text.split('').join(separator);

  return <span>{textDecorated}</span>;
};

DecoratedText.propTypes = {
  text: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
};

export default DecoratedText;
