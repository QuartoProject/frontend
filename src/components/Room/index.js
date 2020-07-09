import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import ImageDepartment from '../../assets/images/apartamento.jpg';
import FavoriteEmpty from '../../assets/images/favorite-empty.svg';
import MarioPhoto from '../../assets/images/mario-foto.jpg';

const Room = ({ id, id_user, nearest_places, price }) => {
  console.log(id_user.picture);
  // fetch(id_user.picture)
  //   .then((res) => {
  //     const response = res.blob;
  //     return response;
  //   })
  //   .then((images) => {
  //     console.log(images);
  //   });
  return (
    <article className="card">
      <figure className="card__image">
        <img className="card__image--icon" src={FavoriteEmpty} alt="Ícon" />
        <img
          className="card__image--apartment"
          src={ImageDepartment}
          alt="Room image"
        />
      </figure>
      <section className="card__description">
        <div className="profile">
          <h1>{nearest_places}</h1>
          <div className="profile__detail">
            <div className="profile__detail--photo">
              <img src={MarioPhoto} alt="Profile photo" />
            </div>
            <p className="profile__detail--name">
              {id_user.name} {id_user.last_name}
            </p>
          </div>
        </div>
        <div className="priceAndButtom">
          <p className="priceAndButtom__price">
            {price} <small>cop</small>
          </p>
          <Link to="/detail">
            <button className="priceAndButtom__buttom">Ver más</button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Room;
