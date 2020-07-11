import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdRoom } from 'react-icons/md';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ListOfIcons from '../../components/ListOfIcons';

import './style.scss';

const DetailData = ({ rooms }) => {
  const {
    id_user,
    id_images,
    description,
    price,
    wifi,
    closet,
    pet,
    kitchen,
    smoke,
    private_bath,
    couple,
    tv,
    washing_machine,
  } = rooms;
  const { name, phone, email } = id_user;

  const [mainPhoto, setMainPhoto] = useState(id_images.image_1 || '');

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
              src={mainPhoto}
              alt="Main Photo"
            />
          </div>
          <div className="photos__container">
            <div className="carrousel">
              <ul data-testid="thumbnails">
                {PICTURES.map((image) => {
                  if (id_images[image] !== '') {
                    return (
                      <li
                        key={image}
                        onClick={() => setMainPhoto(id_images[image])}
                      >
                        <img
                          className="caja"
                          src={id_images[image]}
                          alt="fotos"
                        />
                      </li>
                    );
                  }
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
              <h1 data-testid="location">{id_user.location}</h1>
              <p data-testid="description">{description}</p>
              <br />
              <hr />
              <br />
              <h2 data-testid="price">
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
            <h1 data-testid="services">Servicios</h1>
            <div className="services">
              <ul data-testid="services-icons">
                <ListOfIcons
                  wifi={wifi}
                  closet={closet}
                  pet={pet}
                  kitchen={kitchen}
                  private_bath={private_bath}
                  smoke={smoke}
                  tv={tv}
                  couple={couple}
                  washing_machine={washing_machine}
                />
              </ul>
            </div>
          </div>
          <div className="buttons">
            <a
              href={`https://wa.me/57${phone}?text=Me%20interesa%20el%20cuarto%20que%20estás%20arrendado`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn wa">Whatsapp</button>
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <button className="btn email">Email</button>
            </a>
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
