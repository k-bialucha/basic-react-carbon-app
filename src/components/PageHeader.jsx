import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

import NavigationBar from 'carbon-react/lib/components/navigation-bar/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu/menu';

const checkIfSelected = (path, routes) => {
  const pathIndex = routes.findIndex(route => route.path === path);
  const isSelected = pathIndex !== -1;

  return isSelected;
};

const PageHeader = ({ routes }) => {
  return (
    <NavigationBar>
      <Menu>
        <Link to="/">
          <MenuItem selected={checkIfSelected('/', routes)}>Landing</MenuItem>
        </Link>
        <Link to="/first">
          <MenuItem selected={checkIfSelected('/first', routes)}>
            First Page
          </MenuItem>
        </Link>
        <Link to="/second">
          <MenuItem selected={checkIfSelected('/second', routes)}>
            Second Page
          </MenuItem>
        </Link>
      </Menu>
    </NavigationBar>
  );
};

PageHeader.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default PageHeader;
