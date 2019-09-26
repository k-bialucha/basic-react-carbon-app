import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'carbon-react/lib/components/menu/menu';

import HeaderTextContainer from '../containers/HeaderTextContainer.jsx';

import { StyledNavigationBar, StyledMenuItem } from './PageHeader.style';

const checkIfSelected = (path, routes) => {
  const pathIndex = routes.findIndex(route => route.path === path);
  const isSelected = pathIndex !== -1;

  return isSelected;
};

const PageHeader = ({ routes, theme }) => {
  return (
    <StyledNavigationBar theme={theme} style={{ backgroundColor: 'grey' }}>
      <HeaderTextContainer />
      <Menu>
        <StyledMenuItem
          theme={theme}
          to="/"
          selected={checkIfSelected('/', routes)}
        >
          Landing
        </StyledMenuItem>
        <StyledMenuItem
          theme={theme}
          to="/first"
          selected={checkIfSelected('/first', routes)}
        >
          First Page
        </StyledMenuItem>
        <StyledMenuItem
          theme={theme}
          to="/second"
          selected={checkIfSelected('/second', routes)}
        >
          Second Page
        </StyledMenuItem>
      </Menu>
    </StyledNavigationBar>
  );
};

PageHeader.propTypes = {
  routes: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default PageHeader;
