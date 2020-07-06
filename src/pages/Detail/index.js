import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import IconMap from '../../assets/images/map.svg';
import Mario from '../../assets/images/mario-foto.jpg';
import Wifi from '../../assets/images/wifi.svg';

import './style.scss';

const Detail = () => {
  return (
    <main className="detail">
      <div className="detail__navbar">
        <Navbar prop={true} />
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
        <section className="description">
          <div className="cards card__location">
            <div className="icon">
              <img src={IconMap} alt="Icon place" />
            </div>
            <div className="data__profile">
              <h1>título</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia reprehenderit praesentium nesciunt laudantium, fugiat
                facere, neque consequatur
              </p>
              <br />
              <hr />
              <br />
              <p>descripción</p>
            </div>
          </div>
          <div className="cards card__profile">
            <div className="photo__person">
              <img src={Mario} alt="foto" />
              <h5>Nombre</h5>
            </div>
            <div className="person__description">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                necessitatibus, illum excepturi libero quod quos assumenda quasi
                magni debitis! Facere beatae provident.
              </i>
            </div>
          </div>
          <div className="cards card__services">
            <h1>Servicios</h1>
            <div className="servicios">
              <img src={Wifi} alt="Icon wifi" />
              <p>Wifi</p>
            </div>
          </div>
          <div className="buttons">
            <button className="btn wa">Whatsapp</button>
            <button className="btn email">Email</button>
          </div>
        </section>
      </article>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
