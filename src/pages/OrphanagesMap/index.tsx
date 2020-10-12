import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import localImg from '../../assets/images/local.svg';

import { Container, AddOrphanage } from './styles';

const OrphanagesMap = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={localImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Currais Novos</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>

      <Map
        center={[-6.2602637, -36.5337723]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <AddOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </AddOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
