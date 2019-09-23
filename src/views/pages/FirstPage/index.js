import React from 'react';

import Content from './Content.jsx';

const borderColors = ['indianred', 'mediumorchid', 'teal'];
const sampleTexts = [
  'At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati cupiditate nonprovident, similique sunt in culpa qui officia deserunt mollitiaanimi',
  'Laborum et dolorum fuga. Et harum quidem rerum facilis',
  'Est et expedita distinctio. Nam libero tempore, cum soluta nobis esteligendi optio cumque nihil impedit quo minus id quod maxime placeatfacere possimus, omnis voluptas assumenda est, omnis dolor',
];

const generateContentComponent = number => {
  const order = number % borderColors.length;
  const borderColor = borderColors[order];
  const text = sampleTexts[order];

  return () => (
    <Content text={text} borderColor={borderColor} italic={number % 2 !== 0} />
  );
};

export const Content1 = generateContentComponent(1);
export const Content2 = generateContentComponent(2);
export const Content3 = generateContentComponent(3);

export { default } from './FirstPage.jsx';
