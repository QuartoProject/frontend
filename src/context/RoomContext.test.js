import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Provider from './RoomContext';

import rooms from '../mock.json';

import Detail from '../pages/Detail/index';

const renderWithContext = ({ children }) => {
  return {
    ...render(<Provider value={rooms}>{children}</Provider>),
  };
};

it('checks if initial state is equal to 0', () => {
  const { getByTestId } = renderWithContext(<Detail />);
  waitFor(() => {
    expect(getByTestId('Price')).toHaveTextContent('Precio');
  });
});
