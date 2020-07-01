import React from 'react';

import './style.scss';

import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__transition"></div>
        <div className="home__navbar">
          <h1>Reemplazar este div por el navbar</h1>
        </div>
        <div className="home__title">
          <p>Busca tu rommie perfecto en</p>
          <h1>Bogotá</h1>
        </div>
        <div className="home__carrousel">
          <h1>Reemplazar este div por el carrousel</h1>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
