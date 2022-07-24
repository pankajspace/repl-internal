import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("App", () => {

  test('renders textbox', () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test('renders button', () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders button on clicking of which it should take a value entered inside textbox and redirect to google.com with that value as a query string', () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.click(inputElement, { target: { value: 'hello' } });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    window.history.pushState({}, 'Test Title', '/search?q=hello');
    expect(window.location.href).toContain("https://www.google.co.in/search?q=hello")
  });

})