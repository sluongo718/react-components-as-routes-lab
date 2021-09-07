import React from 'react';
import { move } from 'superagent';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div> 
             <h2>Title: {movie.title}</h2>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map(genre => {
                  return <li>{genre}</li>
                })}
              </ul>
             
          </div>  
      )
        
      })}
    </div>
  );
};

export default Movies;
