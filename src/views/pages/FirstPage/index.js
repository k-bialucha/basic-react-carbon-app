import React from 'react';

import Content from './Content.jsx';

const generateContentComponent = number => {
  return () => <Content text={number} />;
};

export const Content1 = generateContentComponent(1);
export const Content2 = generateContentComponent(2);
export const Content3 = generateContentComponent(3);

export { default } from './FirstPage.jsx';
