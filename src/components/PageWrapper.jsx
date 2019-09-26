import React from 'react';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper';

import { ThemeProvider } from '../data/ThemeContext';

import PageHeader from './PageHeader.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { PortalToTopPlaceholder } from './PortalToTop.jsx';

import { GlobalStyle } from './PageWrapper.style.js';

const PageWrapper = ({ router, children }) => {
  const {
    routes,
    location: { key, pathname },
  } = router;

  return (
    <ThemeProvider>
      {({ variables }) => (
        <>
          <GlobalStyle theme={variables} />
          <div className="portal-transition-container">
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                timeout={250}
                classNames="portal-transition"
              >
                <PortalToTopPlaceholder />
              </CSSTransition>
            </TransitionGroup>
          </div>

          <PageHeader routes={routes} theme={variables} />
          <AppWrapper>
            <div className="transition-container">
              <TransitionGroup>
                <CSSTransition
                  key={pathname}
                  timeout={500}
                  classNames="transition"
                  unmountOnExit
                >
                  <div className="transition">
                    <ErrorBoundary key={key}>{children}</ErrorBoundary>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </AppWrapper>
        </>
      )}
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
