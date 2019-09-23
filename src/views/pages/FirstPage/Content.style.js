/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.5em;
  text-align: center;

  padding: 10px;
  margin: 10px 5px;

  border: 2px dashed ${props => props.borderColor || '#ddd'};
`;
