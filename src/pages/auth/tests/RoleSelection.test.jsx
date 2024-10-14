import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RoleSelection from '../roleSelection';

describe('RoleSelection Component', () => {
  test('allows user to select a role and submit', () => {
    render(
      <MemoryRouter>
        <RoleSelection />
      </MemoryRouter>
    );

    const clientRadio = screen.getByLabelText(/I'm a client, hiring for a project/i);
    fireEvent.click(clientRadio);

    expect(clientRadio.checked).toBe(true);

    const submitButton = screen.getByRole('button', { name: /create account/i });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    expect(screen.getByText(/creating account.../i)).toBeInTheDocument();
  });
});