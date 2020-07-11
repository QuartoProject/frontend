import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('Test 404 page', () => {
  test('No Match test', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByText('Busca tu rommie perfecto en')).toBeInTheDocument();
  });

  test('City title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByText('Bogotá')).toBeInTheDocument();

    screen.debug();
  });
});
