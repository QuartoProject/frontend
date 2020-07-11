import React from 'react';
import { IconContext } from 'react-icons';
import {
  MdWifi,
  MdAccessibility,
  MdPets,
  MdKitchen,
  MdHotTub,
  MdSmokingRooms,
  MdPeople,
  MdPersonalVideo,
  MdLocalLaundryService,
} from 'react-icons/md';

const ListOfIcons = ({
  wifi,
  closet,
  pet,
  kitchen,
  private_bath,
  smoke,
  tv,
  couple,
  washing_machine,
}) => {
  return (
    <>
      <li>
        {wifi ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdWifi />
            <p>Wifi</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {closet ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdAccessibility />
            <p>Closet</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {pet ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdPets />
            <p>Mascotas</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {kitchen ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdKitchen />
            <p>Cocina</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {private_bath ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdHotTub />
            <p>Baño</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {smoke ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdSmokingRooms />
            <p>Fumar</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {tv ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdPersonalVideo />
            <p>Tv</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {couple ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdPeople />
            <p>Tv</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
      <li>
        {washing_machine ? (
          <IconContext.Provider value={{ size: '18px' }}>
            <MdLocalLaundryService />
            <p>Lavadora</p>
          </IconContext.Provider>
        ) : (
          ''
        )}
      </li>
    </>
  );
};

export default ListOfIcons;
