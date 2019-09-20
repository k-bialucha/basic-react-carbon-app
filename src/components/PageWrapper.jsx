import React from 'react';
import PropTypes from 'prop-types';

import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper';
import PageHeader from './PageHeader.jsx';

const PageWrapper = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <AppWrapper>{children}</AppWrapper>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
