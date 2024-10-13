import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import Register from '../Register';

jest.mock('../../../services/api');

describe('Register Component', () => {
  const mockRegister = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Register />
        </AuthProvider>
      </MemoryRouter>
    );
  });

  test('renders the Register component', () => {
    const signUpButton = screen.getByRole('button', { name: /Sign up/i });
    expect(signUpButton).toBeTruthy();
  });

  test('renders input fields', () => {
    const firstNameInput = screen.getByPlaceholderText(/First Name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);

    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });
});