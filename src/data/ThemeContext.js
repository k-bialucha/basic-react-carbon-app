import React from 'react';
import PropTypes from 'prop-types';

import themes from '../themes';

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

const availableThemeNames = Object.keys(themes);

class ThemeProvider extends React.Component {
  state = {
    theme: availableThemeNames[0],
    variables: themes[availableThemeNames[0]],
  };

  switchTheme = () => {
    const currentTheme = this.state.theme;
    const currentThemeIndex = availableThemeNames.indexOf(currentTheme);

    const nextThemeIndex = (currentThemeIndex + 1) % availableThemeNames.length;
    const nextTheme = availableThemeNames[nextThemeIndex];

    this.setState({
      theme: nextTheme,
      variables: themes[nextTheme],
    });
  };

  render() {
    const {
      switchTheme,
      state: { theme, variables },
    } = this;

    const contextData = { theme, variables, switchTheme };

    return (
      <ThemeContext.Provider value={contextData}>
        {this.props.children(contextData)}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
