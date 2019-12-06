import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/candidates">Presidential Candidates</NavLink>
      <NavLink to="/politicians">Your Politicians</NavLink>
    </div>
  );
};

export default NavBar;