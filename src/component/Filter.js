import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filterNamePlanet } = useContext(PlanetContext);
  const [name, setName] = useState('');

  const getName = ({ target: { value } }) => {
    setName(value);
    filterNamePlanet(value);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ getName }
      />
    </form>
  );
}

export default Filter;
