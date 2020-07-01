import React from 'react';

// import Search from '../Search'

import './styles.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <figure className="navbar__imgContainer">
          <img
            src="../../assets/isotipoBlueMain.svg"
            alt="Logo-Quarto"
            className="navbar__img"
          ></img>
        </figure>
        {/* <Search /> */}
        <div className="navbar__search">Buscador</div>
        <ul className="navbar__navList">
          <li>Favoritos</li>
          <li>Iniciar Sesión</li>
          <button>Registrarse</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
