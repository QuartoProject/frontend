import React from 'react';
import { Link } from 'react-router-dom';

import LogoSideBar from '../../components/LogoSideBar';
import X from '../../assets/images/x.svg';
import './style.scss';

const Register = () => {
  return (
    <main>
      <article className="register">
        <LogoSideBar />
        <section className="register__content">
          <Link to="/">
            <img className="x" src={X} alt="exit" />
          </Link>
          <h1>Regístrate</h1>
          <form className="form">
            <div className="log">
              <label htmlFor="name">Nombre</label>
              <input className="input name" type="text" id="name" />
            </div>
            <div className="log">
              <label htmlFor="name">Apellido</label>
              <input className="input name" type="text" id="name" />
            </div>
            <div className="log">
              <label htmlFor="name">Email</label>
              <input className="input name" type="email" id="name" />
            </div>
            <div className="log">
              <label htmlFor="password">contraseña</label>
              <input className="input" type="password" id="password" />
            </div>
            <input type="submit" value="Regístrate" />
          </form>
        </section>
      </article>
    </main>
  );
};

export default Register;
