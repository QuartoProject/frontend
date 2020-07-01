import React from 'react';

import Room from '../../components/Room';

import './style.scss';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__transition"></div>
        <div className="home__navbar">
          <h1>Reemplazar este div por el navbar</h1>
        </div>
        <section className="home__title">
          <p>Busca tu rommie perfecto en</p>
          <h1>Bogotá</h1>
        </section>
        <section className="home__carrousel">
          {[1, 2, 3].map((id) => (
            <Room key={id} />
          ))}
          <div className="home__carrousel--background"></div>
        </section>
        <footer className="home__footer">
          <h1>Reemplazar este div por el footer</h1>
        </footer>
      </main>
    </>
  );
};

export default Home;
