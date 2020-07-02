import React from 'react';

import './style.scss';

import faceIcon from '../../assets/images/facebook.svg';
import linkIcon from '../../assets/images/linkedin.svg';
import twitIcon from '../../assets/images/twitter.svg';

const Footer = () => (
  <footer>
    <div className="footer__menu">
      <ul>
        <li>&copy; 2020 Quarto. All rights reserved</li>
        <li>Privacidad</li>
        <li>Terminos y condiciones</li>
      </ul>
    </div>
    <div className="footer__socials">
      <ul>
        <li>
          <img src={faceIcon} alt="Facebook Icon" />
        </li>
        <li>
          <img src={twitIcon} alt="Twitter Icon" />
        </li>
        <li>
          <img src={linkIcon} alt="LinkedIn Icon" />
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
