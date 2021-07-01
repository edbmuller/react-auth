import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 44rem;

  img {
    width: 14rem;
  }

  form {
    margin: 3rem 0;
    width: 24rem;
    text-align: center;

    h1 {
      margin-bottom: 1.4rem;
    }

    a {
      font-size: 1rem;
      color: #f4ede8;
      display: block;
      margin-top: 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    font-size: 1rem;
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 1.6rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
