import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ListOfRooms from '../../components/ListOfRooms';

import './styles.scss';

const Favoritos = () => {
  return (
    <>
      <main className="main">
        <section className="main__navbar">
          <Navbar changeColor={true} />
        </section>

        <section className="main__listOfRooms">
          <ListOfRooms />
        </section>

        <section className="main__title">
          <h1 data-testid="title">Favoritos</h1>
        </section>

        <section className="main__footer">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Favoritos;
