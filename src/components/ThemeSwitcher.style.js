/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Icon from 'carbon-react/lib/components/icon/icon';

export const StyledIcon = styled(Icon)`
  background-color: ${props => props.theme.secondary};
`;
