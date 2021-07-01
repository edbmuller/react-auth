import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 1rem;
  border: 0.2rem solid #232129;
  padding: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
  color: #666360;

  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

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
