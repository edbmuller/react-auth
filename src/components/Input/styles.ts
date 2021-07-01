import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 1rem;
  padding: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
  border: 0.2rem solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 0.8rem;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;
