import React from 'react';
import { render } from '@testing-library/react';

test('Search test', () => {
  const { getByText } = render(<p>Search</p>);
  expect(getByText('Search')).toBeTruthy();
});
