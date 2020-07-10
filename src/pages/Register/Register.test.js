import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Register from './index';

describe('Test Register Page', () => {
  test('Test page title', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(getByTestId('title')).toHaveTextContent('Regístrate');
  });

  test('Close image', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const imageAlt = screen.getByAltText(/exit/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
