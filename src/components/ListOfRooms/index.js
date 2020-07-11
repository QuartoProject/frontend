import React, { useContext } from 'react';

import { Context } from '../../context/RoomContext';
import Room from '../Room';

const ListOfRooms = () => {
  const rooms = useContext(Context);
  if (!rooms) return <p>Loading...</p>;
  return rooms.map((room) => <Room key={room.id} {...room} />);
};

export default ListOfRooms;
