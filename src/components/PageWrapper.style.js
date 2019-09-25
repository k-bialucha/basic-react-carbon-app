/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === 'light' ? 'black' : 'white')};
    background-color: ${props => (props.theme === 'light' ? 'white' : 'black')};
  }
`;
