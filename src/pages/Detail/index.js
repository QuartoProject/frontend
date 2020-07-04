import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.scss';

const Detail = () => {
  return (
    <main className="detail">
      <div className="detail__navbar">
        <Navbar />
      </div>
      <article className="detail__content">
        <section className="photos">
          <div className="photos__main"></div>
          <div className="photos__container">
            <div className="carrousel">
              <div className="caja"></div>
              <div className="caja"></div>
              <div className="caja"></div>
              <div className="caja"></div>
              <div className="caja"></div>
              <div className="caja"></div>
              <div className="caja"></div>
            </div>
          </div>
        </section>
        <section className="dos"></section>
      </article>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
