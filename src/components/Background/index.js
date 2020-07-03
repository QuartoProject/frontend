import React from 'react';

import Logo from '../../assets/images/quarto.svg';
import './style.scss';

const LogoBackgorund = () => {
  return (
    <section className="image">
      <img src={Logo} alt="Brand logo" />
    </section>
  );
};

export default LogoBackgorund;
