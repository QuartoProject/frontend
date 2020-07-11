import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Room from './index';
describe('Test Room component', () => {
  const id_images = {
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
  };
  const id_user = {
    location: '',
    name: 'user name',
    lastname: 'user lastname',
  };

  test('Alt images', () => {
    render(
      <MemoryRouter>
        <Room id_images={id_images} id_user={id_user} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Room image')).toBeTruthy();
    expect(screen.getByAltText('Profile photo')).toBeTruthy();
  });

  test('Button see more', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Room id_images={id_images} id_user={id_user} />
      </MemoryRouter>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('User location and fullname display', () => {
    render(
      <MemoryRouter>
        <Room id_images={id_images} id_user={id_user} />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('location').toBeInTheDocument());
      expect(screen.getByTestId('user-fullname').toBeInTheDocument());
    });
  });
});
