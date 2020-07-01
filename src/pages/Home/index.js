import React from 'react';

import Navbar from '../../components/Navbar';

import './style.scss';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__transition"></div>
        <Navbar className="home__navbar" />
        <div className="home__title">
          <p>Busca tu rommie perfecto en</p>
          <h1>Bogotá</h1>
        </div>
        <div className="home__carrousel">
          <h1>Reemplazar este div por el carrousel</h1>
        </div>
        <footer className="home__footer">
          <h1>Reemplazar este div por el footer</h1>
        </footer>
      </main>
    </>
  );
};

export default Home;
