import React from 'react';

import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper';
import PageHeader from './PageHeader.jsx';

const PageWrapper = () => {
  return (
    <div>
      <PageHeader />
      <AppWrapper>AppWrapper content</AppWrapper>
    </div>
  );
};

export default PageWrapper;
