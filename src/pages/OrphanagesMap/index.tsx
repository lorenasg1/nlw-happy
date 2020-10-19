import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Link } from 'react-router-dom';
import mapMarkerImg from '../../assets/images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';

import { Container, AddOrphanage } from './styles';
import api from '../../services/api';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = props => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />
          <div>
            <strong>Currais Novos</strong>
            <span>Rio Grande do Norte</span>
          </div>
        </header>

        <h2>Escolha uma casa de acolhimento no mapa</h2>
        <p>Muitas crianças e idosos estão esperando a sua visita :)</p>

        <footer>
          <p>
            Encontradas:{' '}
            {orphanages.length > 0
              ? `${orphanages.length} casas de acolhimento`
              : 'Nenhuma casa de acolhimento ainda.'}
          </p>
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

        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <AddOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </AddOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
