import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';

describe('Test 404 page', () => {
  test('All rights text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/2020 Quarto. All rights reserved/i)).toBeInTheDocument();
  });

  test('Privacidad text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Privacidad/i)).toBeInTheDocument();
  });

  test('Terminos y condiciones text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Terminos y condiciones/i)).toBeInTheDocument();
  });

  test('Alt Facebook image', () => {
    render(<Footer />);
    const imageAlt = screen.getByAltText(/Facebook/i);
    expect(imageAlt).toBeInTheDocument();
  });

  test('Alt Twitter image', () => {
    render(<Footer />);
    const imageAlt = screen.getByAltText(/Twitter/i);
    expect(imageAlt).toBeInTheDocument();
  });

  test('Alt Linkedin image', () => {
    render(<Footer />);
    const imageAlt = screen.getByAltText(/Linkedin/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
