import React from 'react';

import Room from '../../components/Room';
import Navbar from '../../components/Navbar';

import './style.scss';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__transition"></div>
        <Navbar className="home__navbar" />
        <section className="home__title">
          <p>Busca tu rommie perfecto en</p>
          <h1>Bogotá</h1>
        </section>
        <div className="carrousel__background"></div>
        <section className="home__carrousel">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((id) => (
            <Room key={id} />
          ))}
        </section>
        <footer className="home__footer">
          <h1>Reemplazar este div por el footer</h1>
        </footer>
      </main>
    </>
  );
};

export default Home;
