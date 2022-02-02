import React from 'react';

import './header.css';
import {NavLink, Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people/">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets/">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships/">Starships</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;