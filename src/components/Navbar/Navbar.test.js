import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './index';

describe('Test Navbar', () => {
  it('it displays default nav items', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navItems = getByTestId('nav-items');
    expect(navItems.children.length).toBe(3);
  });
});
