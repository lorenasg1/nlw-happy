import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #37c77f;
  place-items: center;

  img {
    width: 12rem;

  }

  @media (min-width: 700px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 400px;
      margin-left: 1rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 400px;
  height: 100%;
  max-height: 100%;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(16px, 1vw + 1rem, 1.5rem);
    text-align: center;
  }

  a {
    margin-top: 3rem;
    height: 64px;
    width: 243px;
    border-radius: 20px;
    border: none;
    background: #31b272;
    color: #fff;
    text-align: center;
    text-decoration: none;
    padding-top: 1.2rem;

    transition: background-color 0.2s;

    &:hover {
      background: #3bd689;
    }
  }
`;

