import React from 'react';

import Navbar from '../../components/Navbar';
import ListOfRooms from '../../components/ListOfRooms';
import Footer from '../../components/Footer';

import './style.scss';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__transition"></div>
        <Navbar />
        <section className="home__title">
          <p>Busca tu rommie perfecto en</p>
          <h1>Bogotá</h1>
        </section>
        <div className="carrousel__background"></div>
        <section className="home__carrousel">
          <ListOfRooms />
        </section>
        <section className="home__footer">
          <Footer />
        </section>
      </main>
      <section className="ListOfRooms">
        <ListOfRooms />
      </section>
      <button className="loadMore">Load More</button>
      <section className="footer__mobile">
        <Footer />
      </section>
    </>
  );
};

export default Home;
