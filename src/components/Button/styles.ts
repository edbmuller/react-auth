import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 1rem;
  border: 0;
  padding: 0.8rem 1.6rem;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
