import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import HamburguerMenu from '../../assets/images/menu-hamburguer.svg';
import HamburguerMenuBlack from '../../assets/images/menu-hamburguer-black.svg';
import './styles.scss';

const Navbar = (color__change) => {
  const { prop } = color__change;
  const ICON = prop ? HamburguerMenuBlack : HamburguerMenu;
  return (
    <header className="home__navbar">
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <figure className="navbar__imgContainer">
            <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
          </figure>
        </Link>
        <Search />
        <ul className="navbar__navList">
          <li className={prop ? 'color__black' : 'color__white'}>Favoritos</li>
          <li>
            <Link
              to="/login"
              className={prop ? 'color__black' : 'color__white'}
            >
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link to="/register" className="color__white">
              Registrarse
            </Link>
          </li>
        </ul>
        <img
          className="navbar__hamburguerMenu"
          src={ICON}
          alt="Hamburguer menu"
        />
      </nav>
    </header>
  );
};

export default Navbar;
