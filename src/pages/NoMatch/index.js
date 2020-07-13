import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Logo from '../../assets/images/logoQuarto.svg';
import './styles.scss';

const NoMatch = () => {
  let location = useLocation();

  return (
    <div className="not__found">
      <div>
        <img src={Logo} alt="Logo Quarto" />
        <h1>Lo sentimos</h1>
        <h2>Página No Encontrada</h2>
        <Link to="/">Regresa al Home</Link>
      </div>
    </div>
  );
};

export default NoMatch;
