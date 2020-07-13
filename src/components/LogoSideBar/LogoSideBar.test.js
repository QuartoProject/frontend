import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LogoSideBar from './index';

describe('Test LogoSideBar Component', () => {
  test('Brand image', () => {
    render(
      <MemoryRouter>
        <LogoSideBar />
      </MemoryRouter>
    );
    const imageAlt = screen.getByAltText(/Brand/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
