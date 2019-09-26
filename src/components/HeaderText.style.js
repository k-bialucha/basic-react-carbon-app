/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Text = styled.div`
  text-align: center;

  font-size: 1.3em;
  font-weight: 600;

  color: ${props => props.theme.primary};

  padding-right: 15px;
  margin-right: 10px;
  border-right: 5px solid ${props => props.theme.primary};
`;
