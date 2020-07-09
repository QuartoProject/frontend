import React from 'react';
import { Context } from '../../context/themeContext';

import Navbar from '../../components/Navbar';
import ListOfRooms from '../../components/ListOfRooms';
import Footer from '../../components/Footer';

import './style.scss';

const Home = () => {
  return (
    <Context.Consumer>
      {(prop) => {
        console.log(prop);
        return (
          <main className="home">
            <div className="home__transition"></div>
            <div className="home__navbar">
              <Navbar changeColor={false} />
            </div>
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
        );
      }}
    </Context.Consumer>
  );
};

export default Home;
