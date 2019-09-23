import React from 'react';
import PropTypes from 'prop-types';

import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper';
import PageHeader from './PageHeader.jsx';

const PageWrapper = ({ router, children }) => {
  const { routes } = router;

  return (
    <div>
      <PageHeader routes={routes} />
      <AppWrapper>{children}</AppWrapper>
    </div>
  );
};

PageWrapper.propTypes = {
  router: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
