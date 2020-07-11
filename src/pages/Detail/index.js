import React from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/RoomContext';

import DetailData from '../../components/DetailData';

const Detail = () => {
  const { id } = useParams();
  return (
    <Context.Consumer>
      {(rooms) => {
        const ROOM_DETAIL = rooms.find((room) => room.id === parseInt(id));
        return <DetailData rooms={ROOM_DETAIL} />;
      }}
    </Context.Consumer>
  );
};

export default Detail;
