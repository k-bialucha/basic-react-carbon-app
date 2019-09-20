import React from 'react';

import NavigationBar from 'carbon-react/lib/components/navigation-bar/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu/menu';

const PageHeader = () => {
  return (
    <NavigationBar>
      <Menu>
        <MenuItem>MenuItem 1</MenuItem>
        <MenuItem>MenuItem 2</MenuItem>
        <MenuItem>MenuItem 3</MenuItem>
      </Menu>
    </NavigationBar>
  );
};

export default PageHeader;
