import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';

import Search from './index';

describe('Test Search Component', () => {
  test('Username label', () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText(
      'A donde quieres irte a vivir ?'
    );
    expect(inputSearch).toBeInTheDocument();
  });

  test('Search text change when user write', () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText(
      'A donde quieres irte a vivir ?'
    );
    expect(inputSearch.value).toBe('');
    fireEvent.change(inputSearch, { target: { value: 'search rooms' } });
    expect(inputSearch.value).toBe('search rooms');
  });
});
