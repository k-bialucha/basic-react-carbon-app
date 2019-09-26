import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Row, Column } from 'carbon-react/lib/components/row/row';
import {
  MenuList,
  MenuListItem,
} from 'carbon-react/lib/components/menu-list/menu-list';
import Pod from 'carbon-react/lib/components/pod/pod';

import { StyledLink } from './FirstPage.style';
import ThemeContext from '../../../data/ThemeContext';

const FirstPage = props => {
  const basePathname = '/first';
  const { variables } = useContext(ThemeContext);

  return (
    <Row columns="2" columnDivide gutter="medium-large">
      <Column>
        <MenuList href="foo">
          <MenuListItem>
            <StyledLink
              theme={variables}
              to={`${basePathname}/content1`}
              activeClassName="active"
            >
              Content 1
            </StyledLink>
          </MenuListItem>
          <MenuListItem>
            <StyledLink
              theme={variables}
              to={`${basePathname}/content2`}
              activeClassName="active"
            >
              Content 2
            </StyledLink>
          </MenuListItem>
          <MenuListItem>
            <StyledLink
              theme={variables}
              to={`${basePathname}/content3`}
              activeClassName="active"
            >
              Content 3
            </StyledLink>
          </MenuListItem>
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
