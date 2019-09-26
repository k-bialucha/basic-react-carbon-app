/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

const transitionDuration = '400ms';
const portalTransitionDuration = '250ms';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};

    transition: background-color 200ms;

    .transition-container, .portal-transition-container {
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

    .portal-transition-enter {
      max-height: 0;
      transform: translateY(-120px);
    }

    .portal-transition-enter-active {
      max-height: 120px;
      transform: translateY(0);
      transition: max-height ${portalTransitionDuration},
        transform ${portalTransitionDuration};
    }

    .portal-transition-exit {
      max-height: 120px;
      transform: translateY(0);
    }

    .portal-transition-exit-active {
      max-height: 0;
      transform: translateY(-120px);
      transition: max-height ${portalTransitionDuration},
        transform ${portalTransitionDuration};
    }
  }
`;
