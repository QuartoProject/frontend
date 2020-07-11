import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import HamburguerMenu from '../../assets/images/menu-hamburguer.svg';
import HamburguerMenuBlack from '../../assets/images/menu-hamburguer-black.svg';
import X from '../../assets/images/x.svg';

import './styles.scss';

const Navbar = (prop) => {
  const COLOR_CHANGE = prop.changeColor;
  const ICON = COLOR_CHANGE ? HamburguerMenuBlack : HamburguerMenu;
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const MENU = toggle ? ICON : X;
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <figure className="navbar__imgContainer">
            <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
          </figure>
        </Link>
        <Search />
        <ul
          data-testid="nav-items"
          className={toggle ? 'navbar__navList' : 'navbar__navList2'}
        >
          <li>
            <Link
              to="/favorites"
              className={COLOR_CHANGE ? 'color__black' : 'color__white'}
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={COLOR_CHANGE ? 'color__black' : 'color__white'}
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
          className={toggle ? 'navbar__hamburguerMenu' : 'fixed'}
          src={MENU}
          alt="Hamburguer menu"
          onClick={handleClick}
        />
        <div className={toggle ? 'hidden' : 'navbar__background'}></div>
      </nav>
    </header>
  );
};

export default Navbar;
