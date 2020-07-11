import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Favoritos from './index';

describe('Favorites Test', () => {
  test('Title of page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Favoritos />
      </MemoryRouter>
    );

    expect(getByTestId('title')).toHaveTextContent('Favoritos');

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
