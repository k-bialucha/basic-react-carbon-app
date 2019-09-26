/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Link } from 'react-router';

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${props => props.theme.text};

  transition: color 300ms;

  &:hover {
    font-weight: 600;
    color: ${props => props.theme.secondary};
  }

  &.active {
    color: ${props => props.theme.primary};

    :after {
      content: ' 👈';
    }
  }
`;
