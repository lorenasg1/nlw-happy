import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Content, SignInButton, Location, EnterApp } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Landing = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Container>
      <Content initial="hidden" animate="visible" variants={variants}>
        <header>
          <div>
            <img src={logoImg} alt="Happy" />
            <Location>
              <strong>Currais Novos</strong>
              <span>Rio Grande do Norte</span>
            </Location>
          </div>

          <SignInButton>Acesso Restrito</SignInButton>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite casas de acolhimento e mude o dia de crianças e idosos.</p>
        </main>

        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </Content>
    </Container>
  );
};

export default Landing;
