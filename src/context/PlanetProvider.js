import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState([]);

  useEffect(() => {
    const fetchPLanet = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetResponse = await response.json();
      setData(planetResponse.results);
      setFilterName(planetResponse.results);
    };
    fetchPLanet();
  }, []);

  const filterNamePlanet = (value) => {
    const filter = filterName.filter(({ name }) => name.includes(value));
    setData(filter);
  };

  return (
    <PlanetContext.Provider value={ { data, filterNamePlanet } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default PlanetProvider;

// https://www.30secondsofcode.org/articles/s/react-proptypes-objectof-vs-shape
