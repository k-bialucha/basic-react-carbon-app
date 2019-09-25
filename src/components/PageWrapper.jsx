import React from 'react';
import PropTypes from 'prop-types';

import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper';

import { ThemeProvider } from '../data/ThemeContext';

import PageHeader from './PageHeader.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { PortalToTopPlaceholder } from './PortalToTop.jsx';

const PageWrapper = ({ router, children }) => {
  const {
    routes,
    location: { key },
  } = router;

  return (
    <ThemeProvider>
      <PortalToTopPlaceholder />
      <PageHeader routes={routes} />
      <AppWrapper>
        <ErrorBoundary key={key}>{children}</ErrorBoundary>
      </AppWrapper>
    </ThemeProvider>
  );
};

PageWrapper.propTypes = {
  router: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
