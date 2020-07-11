import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ListOfRooms from './index';
describe('Test List Of Rooms', () => {
  test('Display loading when rooms is loading', () => {
    render(
      <MemoryRouter>
        <ListOfRooms />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('Display Rooms after loading', () => {
    render(
      <MemoryRouter>
        <ListOfRooms />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('location').toBeInTheDocument());
      expect(screen.getByTestId('user-fullname').toBeInTheDocument());
    });
  });
});
