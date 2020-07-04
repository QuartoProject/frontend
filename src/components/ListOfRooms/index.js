import React from 'react';

import Room from '../Room';

const ListOfRooms = () => {
  const list = [1, 2, 3, 4];
  return list.map((id) => <Room key={id} />);
};

export default ListOfRooms;
