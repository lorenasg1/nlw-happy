import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import backgroundImg from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Content = styled(motion.div)`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  background: url(${backgroundImg}) no-repeat right center;
  background-size: 60%;
  /* background: none; */

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      /* width: 100%; */
    }
  }

  main {
    max-width: 350px;
  }

  h1 {
    font-size: clamp(2.5rem, 1vw + 3rem, 4.75rem);
    font-weight: 800;
    line-height: clamp(2.5rem, 1vw + 3rem, 4.375rem);
  }

  p {
    margin-top: 5rem;
    font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
    line-height: 2.125rem;
  }

  @media (min-width: 700px) {
    header div {
      flex-direction: row;
      width: 100%;
    }
  }
`;

export const Location = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.875rem;

  display: flex;
  flex-direction: column;
  text-align: left;

  strong {
    font-weight: 800;
  }

  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: 4rem;
    display: flex;
    flex-direction: column !important;
    text-align: left;
  }
`;

export const SignInButton = styled(motion.button)`
  background: #12d4e0;
  color: #fff;
  border: none;
  border-radius: 20px;
  height: 56px;
  width: 222px;
  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
    color: #15c3d6;
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
