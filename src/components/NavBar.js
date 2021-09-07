import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/movies' exact>Movies</NavLink>
      <NavLink to='/actors' exact>Actors</NavLink>
      <NavLink to='/directors' exact>Directors</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
