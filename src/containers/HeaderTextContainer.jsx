import React from 'react';
import PropTypes from 'prop-types';

import HeaderText from '../components/HeaderText.jsx';
import withHeaderStore from '../data/withHeaderStore.js';

const HeaderTextContainer = props => {
  const title = props.headerStore.state.get('title');
  return <HeaderText text={title} />;
};

HeaderTextContainer.propTypes = {
  headerStore: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }).isRequired,
};

export default withHeaderStore(HeaderTextContainer);
