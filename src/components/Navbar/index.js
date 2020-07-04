import React from 'react';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import HamburguerMenu from '../../assets/images/menu-hamburguer.svg';
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
        <img
          className="navbar__hamburguerMenu"
          src={HamburguerMenu}
          alt="Hamburguer menu"
        />
      </nav>
    </header>
  );
};

export default Navbar;
