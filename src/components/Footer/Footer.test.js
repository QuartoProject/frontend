import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './index';
describe('Test Navbar', () => {
  it('it displays default items in left and right footer menus', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const leftMenu = getByTestId('left-menu');
    const rightMenu = getByTestId('right-menu');

    expect(leftMenu.children.length).toBe(3);
    expect(rightMenu.children.length).toBe(3);
  });
});
