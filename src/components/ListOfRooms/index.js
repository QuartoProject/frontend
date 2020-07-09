import React from 'react';

import Room from '../Room';

const ListOfRooms = ({ rooms }) => {
  // const list = [1, 2, 3, 4];
  return rooms.map((room) => <Room key={room.id} {...room} />);
};

export default ListOfRooms;
