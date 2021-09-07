import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => {
        return (
        <div><h1>{dir.name}</h1>
        <ul>{dir.movies.map(movie => {
            return <li>{movie}</li>
          })}</ul>
          
        </div>  
        )
      } )}
    </div>
  );
}

export default Directors
