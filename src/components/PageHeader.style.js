/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import NavigationBar from 'carbon-react/lib/components/navigation-bar/navigation-bar';
import { MenuItem } from 'carbon-react/lib/components/menu/menu';

export const StyledNavigationBar = styled(NavigationBar)`
  color: ${props => props.theme.background} !important;
  background-color: ${props => props.theme.background} !important;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${props => props.theme.text} !important;
  background-color: ${props => props.theme.background} !important;
`;
