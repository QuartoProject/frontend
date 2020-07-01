import React from 'react';
import { render } from '@testing-library/react';

test('Navbar test', () => {
  const { getByText } = render(<p>Navbar</p>);
  expect(getByText('Navbar')).toBeTruthy();
});
