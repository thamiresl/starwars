import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const itemsTable = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  const { data } = useContext(PlanetContext);
  return (
    <table>
      <thead>
        <tr>
          {
            itemsTable.map((element) => (<th key={ element }>{ element }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((element) => (
            <tr key={ element.name }>
              <td>{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
              <td>{ element.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
