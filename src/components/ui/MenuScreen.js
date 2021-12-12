import React from 'react';
import { NavLink } from 'react-router-dom';

export const MenuScreen = () => {
  return (
    <div className="menu__router">
      <ul className="menu__router-ul">
        <NavLink activeClassName="active" className="nav-link" exact to="/portfolio">
          Home
        </NavLink>

        <NavLink activeClassName="active" className="nav-link" to="/about">
          About
        </NavLink>

        <NavLink activeClassName="active" className="nav-link" exact to="/contact">
          What I offer?
        </NavLink>

        <NavLink activeClassName="active" className="nav-link" exact to="/project">
          Project
        </NavLink>
      </ul>
    </div>
  );
};
