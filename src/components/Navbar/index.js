import React from 'react';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <header className="home__navbar">
      <nav className="navbar">
        <figure className="navbar__imgContainer">
          <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
        </figure>
        <Search />
        <ul className="navbar__navList">
          <li>Favoritos</li>
          <li>Iniciar Sesión</li>
          <li>Registrarse</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
