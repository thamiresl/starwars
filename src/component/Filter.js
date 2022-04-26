import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filterNamePlanet, data, setData } = useContext(PlanetContext);
  const [namePlanet, setNamePlanet] = useState('');
  const [option, setOption] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };

  const getName = ({ target: { value } }) => {
    setNamePlanet(value);
    filterNamePlanet(value);
  };

  useEffect(() => {
    const filterUpdate = () => {
      setFilterByNumericValues({
        column: option[0],
        comparison: 'maior que',
        value: 0,
      });
    };
    filterUpdate();
  }, [option]);

  const handleClick = () => {
    const { column, comparison, value } = filterByNumericValues;
    setOption(option.filter((element) => column !== element));
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planet) => +planet[column] > +value));

    case 'menor que':
      return setData(data.filter((planet) => +planet[column] < +value));

    case 'igual a':
      return setData(data.filter((planet) => +planet[column] === +value));

    default: return data;
    }
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ namePlanet }
        onChange={ getName }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        {
          option.map((element) => (
            <option
              key={ element }
              value={ element }
            >
              { element }
            </option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterByNumericValues.value }
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
