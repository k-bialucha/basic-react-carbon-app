/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const blueSky = '#1573E6';

export const Text = styled.div`
  text-align: center;

  font-size: 1.3em;
  font-weight: 600;

  color: ${blueSky};

  padding-right: 15px;
  margin-right: 10px;
  border-right: 5px solid ${blueSky};
`;
