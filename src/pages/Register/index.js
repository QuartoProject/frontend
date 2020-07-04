import React from 'react';
import { Link } from 'react-router-dom';

import LogoSideBar from '../../components/LogoSideBar';
import RegisterForm from '../../components/RegisterForm';
import X from '../../assets/images/x.svg';
import './style.scss';

const Register = () => (
  <main>
    <article className="register">
      <LogoSideBar />
      <section className="register__content">
        <Link to="/">
          <img className="x" src={X} alt="exit" />
        </Link>
        <h1>Regístrate</h1>
        <RegisterForm />
      </section>
    </article>
  </main>
);

export default Register;
