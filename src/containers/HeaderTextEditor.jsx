import React from 'react';
import PropTypes from 'prop-types';

import Textbox from 'carbon-react/lib/components/textbox/textbox';
import withHeaderStore from '../data/withHeaderStore';

const HeaderTextEditor = props => {
  return (
    <Textbox
      label="Edit header text"
      value={props.headerStore.state.get('title')}
      onChange={event => {
        const { value } = event.target;
        props.headerStore.onUpdateTitle(value);
      }}
    />
  );
};

HeaderTextEditor.propTypes = {
  headerStore: PropTypes.shape({
    state: PropTypes.object.isRequired,
    onUpdateTitle: PropTypes.func.isRequired,
  }).isRequired,
};

export default withHeaderStore(HeaderTextEditor);
