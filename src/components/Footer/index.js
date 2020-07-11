import React from 'react';
import { IconContext } from 'react-icons';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

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
          <IconContext.Provider value={{ size: '34px', color: '#4064AD' }}>
            <AiFillFacebook />
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: '34px', color: '#1C9DEB' }}>
            <AiFillTwitterSquare />
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: '34px', color: '#0075B0' }}>
            <AiFillLinkedin />
          </IconContext.Provider>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
