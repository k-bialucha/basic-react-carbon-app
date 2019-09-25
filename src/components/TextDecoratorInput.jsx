import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Textbox from 'carbon-react/lib/components/textbox/textbox';

const TextDecoratorInput = ({ children }) => {
  const [text, setText] = useState('example');

  return (
    <div>
      <Textbox
        value={text}
        onChange={event => {
          const { value } = event.target;
          setText(value);
        }}
      />
      <div>{children(text)}</div>
    </div>
  );
};

TextDecoratorInput.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TextDecoratorInput;
