import React from 'react';
import { Route, Redirect } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

import PageWrapper from './components/PageWrapper.jsx';
import LandingPage from './views/pages/LandingPage.jsx';
import FirstPage from './views/pages/FirstPage.jsx';
import SecondPage from './views/pages/SecondPage.jsx';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
  <Route component={PageWrapper}>
    <Route path="/" component={LandingPage} />
    <Route path="/first" component={FirstPage} />
    <Route path="/second" component={SecondPage} />
    <Redirect from="/*" to="/" />
  </Route>
);

// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
