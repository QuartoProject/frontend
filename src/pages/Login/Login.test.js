import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Login from './index';

describe('Test Login Page', () => {
  test('Test page title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(getByText('Iniciar sesión')).toBeInTheDocument();
  });

  test('Close image', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const imageAlt = screen.getByAltText(/exit/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
