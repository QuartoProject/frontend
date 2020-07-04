import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import HamburguerMenu from '../../assets/images/menu-hamburguer.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <header className="home__navbar">
      <nav className="navbar">
        <Link class="navbar__logo" to="/">
          <figure className="navbar__imgContainer">
            <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
          </figure>
        </Link>
        <Search />
        <ul className="navbar__navList">
          <li>Favoritos</li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Registrarse</Link>
          </li>
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
