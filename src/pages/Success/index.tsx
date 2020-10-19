import React from 'react';
import { Link } from 'react-router-dom';

import successImg from '../../assets/images/success.svg';

import { Container, Content } from './styles';

const Success = () => {
  return (
    <Container>

      <img src={successImg} alt="" />
      <Content>
        <h1>Ebaaa!</h1>
        <p>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar
        </p>

        <Link to="/app">Voltar para o mapa</Link>
      </Content>

    </Container>
  );
};

export default Success;
