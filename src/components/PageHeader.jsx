import React from 'react';

import { Link } from 'react-router';

import NavigationBar from 'carbon-react/lib/components/navigation-bar/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu/menu';

const PageHeader = () => {
  return (
    <NavigationBar>
      <Menu>
        <Link to="/">
          <MenuItem>Landing</MenuItem>
        </Link>
        <Link to="/first">
          <MenuItem>First Page</MenuItem>
        </Link>
        <Link to="/second">
          <MenuItem>Second Page</MenuItem>
        </Link>
      </Menu>
    </NavigationBar>
  );
};

export default PageHeader;
