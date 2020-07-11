import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';

import LoginForm from './index';

describe('Test LoginForm Component', () => {
  test('Username label', () => {
    render(<LoginForm />);
    const inputUsername = screen.getByLabelText('username');
    expect(inputUsername).toBeInTheDocument();
  });

  test('Password label', () => {
    render(<LoginForm />);
    const inputPassword = screen.getByLabelText('password');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Username change when user write', () => {
    render(<LoginForm />);
    const inputUsername = screen.getByLabelText('username');
    expect(inputUsername.value).toBe('');
    fireEvent.change(inputUsername, { target: { value: 'username' } });
    expect(inputUsername.value).toBe('username');
  });

  test('Password change when user write', () => {
    render(<LoginForm />);
    const inputPassword = screen.getByLabelText('password');
    expect(inputPassword.value).toBe('');
    fireEvent.change(inputPassword, { target: { value: 'password' } });
    expect(inputPassword.value).toBe('password');
  });
});
