import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RegisterForm from './index';

describe('Test RegisterForm Component', () => {
  test('Name label', () => {
    render(<RegisterForm />);
    const inputName = screen.getByLabelText('name');
    expect(inputName).toBeInTheDocument();
  });

  test('Lastname label', () => {
    render(<RegisterForm />);
    const inputLastname = screen.getByLabelText('lastname');
    expect(inputLastname).toBeInTheDocument();
  });

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

  test('Name change when user write', () => {
    render(<RegisterForm />);
    const inputName = screen.getByLabelText('name');
    expect(inputName.value).toBe('');
    fireEvent.change(inputName, { target: { value: 'User name' } });
    expect(inputName.value).toBe('User name');
  });

  test('Lastname change when user write', () => {
    render(<RegisterForm />);
    const inputLastname = screen.getByLabelText('lastname');
    expect(inputLastname.value).toBe('');
    fireEvent.change(inputLastname, { target: { value: 'User lastname' } });
    expect(inputLastname.value).toBe('User lastname');
  });

  test('Username change when user write', () => {
    render(<RegisterForm />);
    const inputUsername = screen.getByLabelText('username');
    expect(inputUsername.value).toBe('');
    fireEvent.change(inputUsername, { target: { value: 'Testing...' } });
    expect(inputUsername.value).toBe('Testing...');
  });

  test('Email change when user write', () => {
    render(<RegisterForm />);
    const inputEmail = screen.getByLabelText('email');
    expect(inputEmail.value).toBe('');
    fireEvent.change(inputEmail, { target: { value: 'email@gmail.com' } });
    expect(inputEmail.value).toBe('email@gmail.com');
  });

  test('Password change when user write', () => {
    render(<RegisterForm />);
    const inputPassword = screen.getByLabelText('password');
    expect(inputPassword.value).toBe('');
    fireEvent.change(inputPassword, { target: { value: 'password' } });
    expect(inputPassword.value).toBe('password');
  });
});
