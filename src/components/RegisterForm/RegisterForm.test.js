import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RegisterForm from './index';

describe('Test RegisterForm Component', () => {
  test('Username label', () => {
    render(<RegisterForm />);
    const inputUsername = screen.getByLabelText('username');
    expect(inputUsername).toBeInTheDocument();
  });

  test('Email label', () => {
    render(<RegisterForm />);
    const inputEmail = screen.getByLabelText('email');
    expect(inputEmail).toBeInTheDocument();
  });

  test('Password label', () => {
    render(<RegisterForm />);
    const inputPassword = screen.getByLabelText('password');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Username change when user white', () => {
    render(<RegisterForm />);
    const inputUsername = screen.getByLabelText('username');
    expect(inputUsername.value).toBe('');
    fireEvent.change(inputUsername, { target: { value: 'Testing...' } });
    expect(inputUsername.value).toBe('Testing...');
  });

  test('Email change when user white', () => {
    render(<RegisterForm />);
    const inputEmail = screen.getByLabelText('email');
    expect(inputEmail.value).toBe('');
    fireEvent.change(inputEmail, { target: { value: 'email@gmail.com' } });
    expect(inputEmail.value).toBe('email@gmail.com');
  });

  test('Password change when user white', () => {
    render(<RegisterForm />);
    const inputPassword = screen.getByLabelText('password');
    expect(inputPassword.value).toBe('');
    fireEvent.change(inputPassword, { target: { value: 'password' } });
    expect(inputPassword.value).toBe('password');
  });
});
