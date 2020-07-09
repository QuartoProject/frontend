import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ListOfRooms from '../../components/ListOfRooms/index';

import { Context } from '../../context/RoomContext';

import './styles.scss';

const Favoritos = () => {
  return (
    <Context.Consumer>
      {(data) => {
        const rooms = data[0].map((info) => {
          return info;
        });
        // console.log(rooms);
        return (
          <>
            <main className="main">
              <section className="main__navbar">
                <Navbar changeColor={true} />
              </section>

              <section className="main__listOfRooms">
                <ListOfRooms rooms={rooms} />
              </section>

              <section className="main__title">
                <h1>Favoritos</h1>
              </section>

              <section className="main__footer">
                <Footer />
              </section>
            </main>
          </>
        );
      }}
    </Context.Consumer>
  );
};

export default Favoritos;
