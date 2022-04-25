import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './component/Table';
import Filter from './component/Filter';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Filter />
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
