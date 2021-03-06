import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';

import './style.scss';

const Room = ({ id, id_user, id_images, price }) => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
    console.log({ id_room: id, id_user: 1 });
  };
  return (
    <article className="card">
      <figure className="card__image">
        {toggle ? (
          <a onClick={handleClick} className="card__image--icon" alt="Icon">
            <IconContext.Provider value={{ size: '34px', color: '#fff' }}>
              <MdBookmarkBorder />
            </IconContext.Provider>
          </a>
        ) : (
          <a onClick={handleClick} className="card__image--icon" alt="Icon">
            <IconContext.Provider value={{ size: '34px', color: '#fff' }}>
              <MdBookmark />
            </IconContext.Provider>
          </a>
        )}

        {/* <img className="card__image--icon" src={FavoriteEmpty} /> */}
        <img
          className="card__image--apartment"
          src={id_images.image_1}
          alt="Room image"
        />
      </figure>
      <section className="card__description">
        <div className="profile">
          <h1 datatestid="location">{id_user.location}</h1>
          <div className="profile__detail">
            <div className="profile__detail--photo">
              <img
                src="https://thispersondoesnotexist.com/image"
                alt="Profile photo"
              />
            </div>
            <p datatestid="user-fullname" className="profile__detail--name">
              {id_user.name} {id_user.last_name}
            </p>
          </div>
        </div>
        <div className="priceAndButtom">
          <p datatestid="price" className="priceAndButtom__price">
            {price} <small>cop</small>
          </p>
          <Link to={`detail/${id}`}>
            <button className="priceAndButtom__buttom">Ver más</button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Room;
