/* eslint-disable import/prefer-default-export */
/* eslint indent: ["error", 2, { "ignoredNodes": ["ConditionalExpression"] }] */
import styled from 'styled-components';

import NavigationBar from 'carbon-react/lib/components/navigation-bar/navigation-bar';
import { MenuItem } from 'carbon-react/lib/components/menu/menu';

export const StyledMenuItem = styled(MenuItem)`
  color: ${props => props.theme.text} !important;
  background-color: ${props => props.theme.background} !important;

  transition: background-color 200ms;

  &::after {
    background-color: ${props =>
      props.selected ? props.theme.secondary : 'transparent'} !important;
  }
  &:hover {
    &::after {
      background-color: ${props => props.theme.primary} !important;
    }
  }
`;

export const ThemeSwitcherContainer = styled.div``;

export const StyledNavigationBar = styled(NavigationBar)`
  color: ${props => props.theme.background} !important;
  background-color: ${props => props.theme.background} !important;

  margin-bottom: 15px;

  transition: background-color 200ms;

  .carbon-app-wrapper {
    display: flex;
  }

  ${ThemeSwitcherContainer} {
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
