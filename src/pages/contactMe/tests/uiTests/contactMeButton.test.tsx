// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { useAppContext } from '../../../../contexts/AppContext';
// import ContactMe from '../../ContactMe';
// import { submitContactForm } from '../../services/contactService';

// jest.mock('../../contexts/AppContext', () => ({
//   useAppContext: jest.fn(),
// }));

// jest.mock('../services/contactService', () => ({
//   submitContactForm: jest.fn(),
// }));

// describe('ContactMe Button UI Tests', () => {
//   const mockSetName = jest.fn();
//   const mockSetEmail = jest.fn();
//   const mockSetMessage = jest.fn();

//   beforeEach(() => {
//     (useAppContext as jest.Mock).mockReturnValue({
//       name: '',
//       email: '',
//       message: '',
//       setName: mockSetName,
//       setEmail: mockSetEmail,
//       setMessage: mockSetMessage,
//     });

//     jest.clearAllMocks();
//   });

//   it('renders the "Send Message" button correctly', () => {
//     render(<ContactMe />);
    
//     // Check if button is in the document
//     const button = screen.getByRole('button', { name: /send message/i });
//     expect(button).toBeInTheDocument();
    
//     // Ensure button is enabled initially
//     expect(button).toBeEnabled();
//   });

//   it('displays validation error when clicking the button with empty fields', async () => {
//     render(<ContactMe />);
    
//     // Click the button
//     fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
//     // Wait for validation error to appear
//     await waitFor(() => {
//       expect(screen.getByText(/please fill out all fields/i)).toBeInTheDocument();
//     });
//   });

//   it('disables the button during form submission', async () => {
//     (submitContactForm as jest.Mock).mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 1000)));

//     render(<ContactMe />);
    
//     // Fill in the form fields
//     fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText(/your message/i), { target: { value: 'Hello, this is a test message.' } });

//     const button = screen.getByRole('button', { name: /send message/i });

//     // Click the button to submit the form
//     fireEvent.click(button);

//     // Expect button to be disabled while submitting
//     expect(button).toBeDisabled();

//     // Wait for submission to complete
//     await waitFor(() => expect(button).toBeEnabled());
//   });
// });
