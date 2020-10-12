import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 3rem;
      font-weight: 800;
      line-height: 2.625rem;
      margin-top: 4rem;
    }

    p {
      line-height: 1.75rem;
      margin-top: 1.5rem;
    }

    footer {
      display: flex;
      flex-direction: column;
      line-height: 1.5rem;

      strong {
        font-weight: 800;
      }
    }
  }

  div {
    z-index: 5;
  }
`;

export const AddOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;

  width: 4rem;
  height: 4rem;
  background: #15c3d6;
  border-radius: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #17e6eb;
  }
`;
