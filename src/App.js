import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './component/Table';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
