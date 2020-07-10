import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import IconMap from '../../assets/images/map.svg';
import Mario from '../../assets/images/mario-foto.jpg';
import Wifi from '../../assets/services/wifi.svg';

const DetailData = (prop) => {
  const { rooms } = prop;
  const { id, id_user } = rooms;
  const { name } = id_user;
  console.log(id, name);
  return (
    <main className="detail">
      <div className="detail__navbar">
        <Navbar changeColor={true} />
      </div>
      <article className="detail__content">
        <section className="photos">
          <div className="photos__main"></div>
          <div className="photos__container">
            <div className="carrousel">
              <ul>
                {[1, 2, 3, 4, 5, 6, 7].map((id) => {
                  return (
                    <li key={id}>
                      <div className="caja"></div>
                    </li>
                  );
                })}
              </ul>
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
              <div className="photo__container">
                <img src={Mario} alt="foto" />
              </div>
              <h5>{name}</h5>
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
            <div className="services">
              <ul>
                {[1, 2, 3].map((ids) => {
                  return (
                    <li key={ids}>
                      <img src={Wifi} alt="Icon wifi" />
                      <p>Wifi</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="buttons">
            <Link
              to="https://wa.me/57$%7Btelefono%7D?text=Hola,%20me%20interesa%20la%20habitaci%C3%B3n%20que%20est%C3%A1s%20%alquilando"
              target="_blank"
            >
              <button className="btn wa">Whatsapp</button>
            </Link>
            <Link to="mailto:betotoro0902@gmail.com" target="_blank">
              <button className="btn email">Email</button>
            </Link>
          </div>
        </section>
      </article>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default DetailData;
