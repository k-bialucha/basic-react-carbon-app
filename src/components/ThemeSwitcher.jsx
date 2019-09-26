import React, { useContext } from 'react';
import Icon from 'carbon-react/lib/components/icon/icon';
import ThemeContext from '../data/ThemeContext';

const ThemeSwitcher = () => {
  const { variables, switchTheme } = useContext(ThemeContext);
  return (
    <Icon
      type={variables.icon}
      bgTheme="maintenance"
      bgShape="circle"
      onClick={switchTheme}
    />
  );
};

export default ThemeSwitcher;
