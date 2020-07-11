import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('Test Home Page', () => {
  test('Search title', () => {
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
  });
});
