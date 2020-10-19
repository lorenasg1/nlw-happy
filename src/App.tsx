import React from 'react';

import Routes from './routes';

import 'leaflet/dist/leaflet.css';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
