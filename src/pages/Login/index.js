import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoSideBar from '../../components/LogoSideBar';
import LoginForm from '../../components/LoginForm';
import X from '../../assets/images/x.svg';
import './style.scss';

const Login = () => (
  <main>
    <article className="login">
      <LogoSideBar />
      <section className="login__content">
        <Link to="/">
          <img className="x" src={X} alt="exit" />
        </Link>
        <h1>Iniciar sesión</h1>
        <LoginForm />
      </section>
    </article>
  </main>
);

export default Login;
