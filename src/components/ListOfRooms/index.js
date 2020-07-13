import React, { useContext } from 'react';

import Room from '../Room';

const ListOfRooms = ({ rooms }) => {
  if (!rooms) return <p>Loading...</p>;
  return rooms.map((room) => <Room key={room.id} {...room} />);
};

export default ListOfRooms;
