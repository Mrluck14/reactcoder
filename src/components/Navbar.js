import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/remeras">Remeras</Link></li>
        <li><Link to="/category/pantalones">Pantalones</Link></li>
        <li><Link to="/category/camperas">Camperas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;