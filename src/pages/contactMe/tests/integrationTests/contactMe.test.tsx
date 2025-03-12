// import '@testing-library/jest-dom';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { vi, describe, it, expect, beforeEach } from 'vitest';
// import { useAppContext } from '../../../../contexts/AppContext';
// import ContactMe from '../../ContactMe';
// import { submitContactForm } from '../../services/contactService';

// // Mock the context and service functions
// vi.mock('../../contexts/AppContext', () => ({
//   useAppContext: vi.fn(),
// }));

// vi.mock('../../services/contactService', () => ({
//   submitContactForm: vi.fn(),
// }));

// describe('ContactMe Component', () => {
//   const mockSetName = vi.fn();
//   const mockSetEmail = vi.fn();
//   const mockSetMessage = vi.fn();

//   beforeEach(() => {
//     (useAppContext as vi.Mock).mockReturnValue({
//       name: '',
//       email: '',
//       message: '',
//       setName: mockSetName,
//       setEmail: mockSetEmail,
//       setMessage: mockSetMessage,
//     });

//     vi.clearAllMocks();
//   });

//   it('renders form fields correctly', () => {
//     render(<ContactMe />);

//     expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
//   });

//   it('displays validation error when submitting empty form', async () => {
//     render(<ContactMe />);
//     fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

//     await waitFor(() => {
//       expect(screen.getByText(/Please fill out all fields./i)).toBeInTheDocument();
//     });
//   });

//   it('displays success message when form is submitted successfully', async () => {
//     (submitContactForm as vi.Mock).mockResolvedValueOnce(undefined);

//     render(<ContactMe />);

//     fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'Hello, this is a test message.' } });

//     fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

//     await waitFor(() => {
//       expect(screen.getByText(/Thank you for your message/i)).toBeInTheDocument();
//     });
//   });

//   it('displays error message when submission fails', async () => {
//     (submitContactForm as vi.Mock).mockRejectedValueOnce(new Error());

//     render(<ContactMe />);

//     fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'Hello, this is a test message.' } });

//     fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

//     await waitFor(() => {
//       expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
//     });
//   });
// });
