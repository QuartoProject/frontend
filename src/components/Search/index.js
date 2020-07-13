import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import ListOfRooms from '../ListOfRooms/index';

import './styles.scss';

const Search = () => {
  const [data, setData] = useState();
  const [rooms, setRooms] = useState();
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
    value === '' ? setToggle(false) : null;
  };

  const handleClick = () => {
    fetch(`https://quarto-backend.herokuapp.com/search/${data}`)
      .then((response) => {
        const info = response.json();
        return info;
      })
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setToggle(!toggle);
  };

  return (
    <div className="search_box">
      <input
        type="text"
        placeholder="A donde quieres irte a vivir ?"
        onChange={handleChange}
      />
      <MdSearch className="search" onClick={handleClick} />
      <div className={toggle ? 'background' : 'hidden'}></div>
      <div className={toggle ? 'results' : 'hidden'}>
        {rooms === undefined ? (
          'Loading...'
        ) : (
          <>
            {rooms.message ? (
              <h1 className="error">{rooms.message}</h1>
            ) : (
              <ListOfRooms rooms={rooms} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
