import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './index.css';

const GET_STAR_SHIPS = gql`
  query GetStarShips {
    allStarships {
      totalCount
      edges {
        node {
          cargoCapacity
          crew
          manufacturers
          maxAtmospheringSpeed
          name
          model
        }
      }
    }
  }
`;

export default function StarShips() {
  const { loading, error, data } = useQuery(GET_STAR_SHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { totalCount, edges } = data.allStarships;

  if(totalCount === 0) return <p>No star ships found</p>;

  return (
    <div className="products-container">
      {edges.map(({ node: { name, model, maxAtmospheringSpeed, crew } }) => (
        <div className="card" key={name}>
          <h3>{name}</h3>
          <p>Model: {model}</p>
          <p>Max speed: {maxAtmospheringSpeed}</p>
          <p>Crew: {crew}</p>
        </div>
      ))}
    </div>
  );
}
