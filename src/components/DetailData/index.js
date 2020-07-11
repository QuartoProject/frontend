import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdWifi, MdRoom } from 'react-icons/md';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.scss';

const DetailData = (prop) => {
  const { rooms } = prop;

  const { id_user, id_images, description, price } = rooms;
  const { name } = id_user;

  const PICTURES = [];
  for (let prop in id_images) {
    PICTURES.push(prop);
  }
  PICTURES.shift();

  return (
    <main className="detail">
      <div className="detail__navbar">
        <Navbar changeColor={true} />
      </div>
      <article className="detail__content">
        <section className="photos">
          <div className="photos__main">
            <img
              className="photos__main--image"
              src={id_images.image_1}
              alt=""
            />
          </div>
          <div className="photos__container">
            <div className="carrousel">
              <ul>
                {PICTURES.map((images) => {
                  return (
                    <li key={images}>
                      <img
                        className="caja"
                        src={id_images[images]}
                        alt="fotos"
                      />
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
              <IconContext.Provider value={{ size: '34px' }}>
                <div>
                  <MdRoom />
                  {/* <FaFolder /> */}
                </div>
              </IconContext.Provider>
              {/* <img src="" alt="Icon place" /> */}
            </div>
            <div className="data__profile">
              <h1>{id_user.location}</h1>
              <p>{description}</p>
              <br />
              <hr />
              <br />
              <h2>
                Precio
                <strong>$</strong>
                {price}
              </h2>
            </div>
          </div>
          <div className="cards card__profile">
            <div className="photo__person">
              <div className="photo__container">
                <img
                  src="https://thispersondoesnotexist.com/image"
                  classalt="foto"
                />
              </div>
              <h5>{name}</h5>
            </div>
            <div className="person__description">
              <i>{id_user.description}</i>
            </div>
          </div>
          <div className="cards card__services">
            <h1>Servicios</h1>
            <div className="services">
              <ul>
                {[1, 2, 3].map((ids) => {
                  return (
                    <li key={ids}>
                      <MdWifi alt="Icon wifi" />
                      {/* <img alt="Icon wifi" /> */}
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
