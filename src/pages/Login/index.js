import React from 'react';

import LogoSideBar from '../../components/LogoSideBar';
import X from '../../assets/images/x.svg';
import './style.scss';

const Login = () => {
  return (
    <main>
      <article className="login">
        <LogoSideBar />
        <section className="login__content">
          <img className="x" src={X} alt="exit" />
          <h1>Iniciar sesión</h1>
          <form className="form">
            <div className="log form__name">
              <label htmlFor="name">Email</label>
              <input className="input name" type="email" id="name" />
            </div>
            <div className="log form__password">
              <label htmlFor="password">contraseña</label>
              <input className="input" type="password" id="password" />
            </div>
            <input type="submit" value="Inicia sesión" />
          </form>
        </section>
      </article>
    </main>
  );
};

export default Login;
