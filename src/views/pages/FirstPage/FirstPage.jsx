import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

import { Row, Column } from 'carbon-react/lib/components/row/row';
import {
  MenuList,
  MenuListItem,
} from 'carbon-react/lib/components/menu-list/menu-list';
import Pod from 'carbon-react/lib/components/pod/pod';

const FirstPage = props => {
  const basePathname = '/first';

  return (
    <Row columns="2" columnDivide gutter="medium-large">
      <Column>
        <MenuList href="foo">
          <Link to={`${basePathname}/content1`}>
            <MenuListItem>Content 1</MenuListItem>
          </Link>
          <Link to={`${basePathname}/content2`}>
            <MenuListItem>Content 2</MenuListItem>
          </Link>
          <Link to={`${basePathname}/content3`}>
            <MenuListItem>Content 3</MenuListItem>
          </Link>
        </MenuList>
      </Column>
      <Column>
        <Pod padding="small" title="My Pod" subtitle="subtitle test">
          This is some example content for a Pod.
          {props.children}
        </Pod>
      </Column>
    </Row>
  );
};

FirstPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirstPage;
