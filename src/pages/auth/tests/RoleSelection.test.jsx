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

    // Select the "client" role
    const clientRadio = screen.getByLabelText(/I'm a client, hiring for a project/i);
    fireEvent.click(clientRadio);

    // Check if the client role is selected
    expect(clientRadio.checked).toBe(true);

    // Check if the submit button is enabled
    const submitButton = screen.getByRole('button', { name: /create account/i });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    expect(screen.getByText(/creating account.../i)).toBeInTheDocument();
  });
});