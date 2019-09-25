import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({ theme: 'light' });

const availableThemes = ['light', 'dark'];

class ThemeProvider extends React.Component {
  state = {
    theme: 'light',
  };

  switchTheme = () => {
    const currentTheme = this.state.theme;
    const currentThemeIndex = availableThemes.indexOf(currentTheme);

    const nextThemeIndex = (currentThemeIndex + 1) % availableThemes.length;
    const nextTheme = availableThemes[nextThemeIndex];

    this.setState({
      theme: nextTheme,
    });
  };

  render() {
    const {
      switchTheme,
      state: { theme },
    } = this;

    const contextData = { theme, switchTheme };

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

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
