import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Content, Location, EnterApp } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Landing = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Currais Novos</strong>
          <span>Rio Grande do Norte</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </Content>
    </Container>
  );
};

export default Landing;
