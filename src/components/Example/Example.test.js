import React from 'react';
import { render } from '@testing-library/react';

test('Hello world', () => {
  const { getByText } = render(<p>Hello Jest</p>);
  expect(getByText('Hello Jest')).toBeTruthy();
});
