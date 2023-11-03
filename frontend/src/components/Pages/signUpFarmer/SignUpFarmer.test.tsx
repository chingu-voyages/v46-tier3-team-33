import { render, fireEvent, screen } from '@testing-library/react';
import SignUp from './SignUpFarmer'; 
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


describe('<SignUp />', () => {

  it('renders SignUp', () => {
    render(<SignUp />);
  });

  it('validates email', () => {
    render(<SignUp />);
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(screen.getByText('Please enter a valid email.')).toBeInTheDocument();
  });

  it('checks password repetition', () => {
    render(<SignUp />);
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat Password');

    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password2' } });
    expect(screen.getByText('Please repeat correct password.')).toBeInTheDocument();
  });

});
