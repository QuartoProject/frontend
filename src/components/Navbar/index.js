import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import Logo from '../../assets/images/logoQuarto.svg';
import HamburguerMenu from '../../assets/images/menu-hamburguer.svg';
import './styles.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  // const [menu, setMenu] = useState('navbar__navList');
  console.log(toggle);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header className="home__navbar">
      <nav className="navbar">
        <Link class="navbar__logo" to="/">
          <figure className="navbar__imgContainer">
            <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
          </figure>
        </Link>
        <Search />
        <ul className={toggle ? 'navbar__navList' : 'navbar__navList2'}>
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
          onClick={handleClick}
        />
      </nav>
    </header>
  );
};

export default Navbar;
