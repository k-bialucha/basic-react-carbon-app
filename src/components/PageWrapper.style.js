/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

const transitionDuration = '500ms';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};

    transition: background-color 200ms;

    .transition-container {
      position: relative;
    }

    .transition-enter {
      opacity: 0;
    }

    .transition-enter-active {
      opacity: 1;
      transition: opacity ${transitionDuration} ease-in;
    }

    .transition-exit {
      position: absolute;
      top: 0;
      opacity: 1;
    }

    .transition-exit-active {
      opacity: 0;
      transition: opacity ${transitionDuration} ease-out;
    }

  }
`;
