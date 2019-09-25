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

    return (
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
