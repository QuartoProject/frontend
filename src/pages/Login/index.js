import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.scss';
import Logo from '../../assets/images/quarto.svg';

const index = () => {
  return (
    <>
      <main>
        <Navbar />
        <article className="login">
          <section className="login__image">
            <img src={Logo} alt="Brand logo" />
          </section>
          <section className="login__content">
            <h1>Iniciar sesión</h1>
            <form className="form">
              <div className="log form__name">
                <label htmlFor="name">Nombre</label>
                <input className="input name" type="text" id="name" />
              </div>
              <div className="log form__password">
                <label htmlFor="password">contraseña</label>
                <input className="input" type="password" id="password" />
              </div>
              <input type="submit" value="Inicia sesión" />
            </form>
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
};

export default index;
