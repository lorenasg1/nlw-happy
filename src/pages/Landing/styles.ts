import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 700px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  background: url(${backgroundImg}) no-repeat 80% center;

  main {
    max-width: 350px;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 800;
    line-height: 4.375rem;
  }

  p {
    margin-top: 2.5rem;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 9%;

  font-size: 1.5rem;
  line-height: 2.125rem;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 8%;

  width: 5rem;
  height: 5rem;
  background: #ffd666;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }
`;
