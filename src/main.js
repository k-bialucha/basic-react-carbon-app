import React from 'react';
import { Route, Redirect } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

import PageWrapper from './components/PageWrapper.jsx';
import LandingPage from './views/pages/LandingPage.jsx';
import FirstPage, {
  Content1,
  Content2,
  Content3,
} from './views/pages/FirstPage/index.js';
import SecondPage from './views/pages/SecondPage.jsx';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
  <Route component={PageWrapper}>
    <Route path="/" component={LandingPage} />
    <Route path="/first" component={FirstPage}>
      <Route path="content1" component={Content1} />
      <Route path="content2" component={Content2} />
      <Route path="content3" component={Content3} />
      {/* TODO: <Redirect from="/first" to="/first/content2" /> */}
    </Route>
    <Route path="/second" component={SecondPage} />
    <Redirect from="/*" to="/" />
  </Route>
);

// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
