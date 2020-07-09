import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('https://quarto-backend.herokuapp.com/room/')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => setRooms(data));
  }, []);

  return <Context.Provider value={rooms}>{children}</Context.Provider>;
};

export default Provider;
