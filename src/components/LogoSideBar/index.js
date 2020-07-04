import React from 'react';

import Logo from '../../assets/images/quarto.svg';
import './style.scss';

const LogoSideBar = () => {
  return (
    <section className="image">
      <img src={Logo} alt="Brand logo" />
    </section>
  );
};

export default LogoSideBar;
