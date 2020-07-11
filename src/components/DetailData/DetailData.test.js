import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DetailData from './index';

const rooms = {
  id: 1,
  created: '2020-07-09 12:41:32.476080+00:00',
  id_user: {
    name: 'Jhon',
    last_name: 'Doe',
    phone: 1112223344,
    email: 'jhon@hotmail.com',
    picture: 'https://thispersondoesnotexist.com/',
  },
  id_images: {
    image_1:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    image_2:
      'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    image_3: '',
    image_4: '',
    image_5: '',
    image_6: '',
    image_7: '',
    image_8: '',
  },
  price: 999999,
  nearest_places: 'Suba',
  mts2: '10mts2',
  furniture:
    'Aenean lobortis tristique ante, et tempor libero rutrum sed. Quisque a semper felis. Pellentesque facilisis lorem nec maximus suscipit. In semper lorem a est sollicitudin, a dignissim lorem dignissim.',
  private_bath: true,
  wifi: true,
  closet: true,
  kitchen: false,
  pet: false,
  washing_machine: false,
  furnished: true,
  tv: false,
  smoke: false,
  couple: false,
  family_atmosphere: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, blandit lobortis sagittis eu, consequat sit amet libero. Vivamus dictum velit a leo congue, sed dignissim risus vulputate. Proin sed interdum neque. Praesent eleifend leo nec dui semper scelerisque. In sed erat porttitor, faucibus dui non, scelerisque ligula. Aliquam lectus orci, ornare aliquet pellentesque vel, ultricies eu eros. Aenean lobortis tristique ante, et tempor libero rutrum sed. Quisque a semper felis. Pellentesque facilisis lorem nec maximus suscipit. In semper lorem a est sollicitudin, a dignissim lorem dignissim.',
  available: true,
};

describe('Test Detail', () => {
  test('Test content detail', () => {
    const { getByAltText, getByTestId } = render(
      <MemoryRouter>
        <DetailData rooms={rooms} />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(getByAltText('Main Photo')).toBeInTheDocument();
      expect(getByTestId('thumbnails').children.length).toBeGreaterThanOrEqual(
        1
      );
      expect(getByTestId('price')).toBeInTheDocument();
      expect(getByTestId('location')).toBeInTheDocument();
      expect(getByTestId('description')).toBeInTheDocument();
      expect(getByTestId('services')).toBeInTheDocument();
      expect(
        getByTestId('services-icon').children.length
      ).toBeGreaterThanOrEqual(1);
    });
  });
});
