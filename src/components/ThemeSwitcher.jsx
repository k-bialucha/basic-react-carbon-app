import React, { useContext } from 'react';

import ThemeContext from '../data/ThemeContext';

import { StyledIcon } from './ThemeSwitcher.style';

const ThemeSwitcher = () => {
  const { variables, switchTheme } = useContext(ThemeContext);
  return (
    <StyledIcon
      type={variables.icon}
      theme={variables}
      bgTheme="maintenance"
      bgShape="circle"
      onClick={switchTheme}
    />
  );
};

export default ThemeSwitcher;
