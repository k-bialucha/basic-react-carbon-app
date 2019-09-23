import React from 'react';

import { Row, Column } from 'carbon-react/lib/components/row/row';
import {
  MenuList,
  MenuListItem,
} from 'carbon-react/lib/components/menu-list/menu-list';
import Pod from 'carbon-react/lib/components/pod/pod';

const FirstPage = () => {
  return (
    <Row columns="3" columnDivide gutter="medium-large">
      <Column>
        <MenuList href="foo">
          <MenuListItem>menu list item 1</MenuListItem>
          <MenuListItem>menu list item 2</MenuListItem>
          <MenuListItem>menu list item 3</MenuListItem>
        </MenuList>
      </Column>
      <Column>
        <Pod padding="small" title="My Pod" subtitle="subtitle test">
          This is some example content for a Pod.
        </Pod>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [2]</h3>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
          </p>
        </section>
      </Column>
      <Column>
        <section>
          <h3>Lorem Ipsum [3]</h3>
          <p>
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam
          </p>
        </section>
      </Column>
    </Row>
  );
};

export default FirstPage;
