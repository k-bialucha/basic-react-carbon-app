/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Link } from 'react-router';

const greenBright = '#00DC00';
const greenBrightDull = '#38C72A';
const slate = '#003349';

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${slate};

  transition: color 300ms;

  &:hover {
    font-weight: 600;
    color: ${greenBright};
  }

  &.active {
    color: ${greenBrightDull};

    :after {
      content: ' 👈';
    }
  }
`;
