import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMenu, MdClear } from 'react-icons/md';

import Search from '../Search';

import './styles.scss';

const Navbar = (prop) => {
  const Logo = 'https://i.imgur.com/Qye9GB0.png';
  const COLOR_CHANGE = prop.changeColor;
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <figure className="navbar__imgContainer">
            <img src={Logo} alt="Logo-Quarto" className="navbar__img"></img>
          </figure>
        </Link>
        <Search />
        <ul className={toggle ? 'navbar__navList' : 'navbar__navList2'}>
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
        {COLOR_CHANGE ? (
          <a onClick={handleClick}>
            <IconContext.Provider
              value={{
                className: 'navbar__hamburguerMenu',
                size: '40px',
                color: '#000',
              }}
            >
              {toggle ? <MdMenu /> : <MdClear />}
            </IconContext.Provider>
          </a>
        ) : (
          <a className="navbar__hamburguerMenu" onClick={handleClick}>
            <IconContext.Provider
              value={{
                // className: 'navbar__hamburguerMenu',
                size: '40px',
                color: '#fff',
              }}
            >
              {toggle ? <MdMenu /> : <MdClear />}
            </IconContext.Provider>
          </a>
        )}
        <div className={toggle ? 'hidden' : 'navbar__background'}></div>
      </nav>
    </header>
  );
};

export default Navbar;
