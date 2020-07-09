import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NoMatch from './index';

describe('Test 404 page', () => {
  test('No Match test', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    );
    expect(getByText('Página No Encontrada')).toBeTruthy();
  });

  test('Alt image', () => {
    render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    );
    const imageAlt = screen.getByAltText(/Logo/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
