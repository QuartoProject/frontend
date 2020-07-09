import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState(true);
  console.log('hola');
  const value = {
    data,
    activated: () => {
      setData(false);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
