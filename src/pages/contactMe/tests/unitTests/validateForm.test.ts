// import { validateForm } from '../../utils/validateForm';

// describe('validateForm', () => {
//   it('should return error if any field is empty', () => {
//     expect(validateForm('', 'test@example.com', 'Hello')).toBe('Please fill out all fields.');
//     expect(validateForm('John Doe', '', 'Hello')).toBe('Please fill out all fields.');
//     expect(validateForm('John Doe', 'test@example.com', '')).toBe('Please fill out all fields.');
//   });

//   it('should return error if name contains invalid characters', () => {
//     expect(validateForm('John123', 'test@example.com', 'Hello')).toBe('Name can only contain letters and spaces.');
//     expect(validateForm('John_Doe', 'test@example.com', 'Hello')).toBe('Name can only contain letters and spaces.');
//   });

//   it('should return error if email is invalid', () => {
//     expect(validateForm('John Doe', 'invalid-email', 'Hello')).toBe('Please enter a valid email address.');
//     expect(validateForm('John Doe', 'test@com', 'Hello')).toBe('Please enter a valid email address.');
//   });

//   it('should return error if message exceeds 500 characters', () => {
//     const longMessage = 'A'.repeat(501);
//     expect(validateForm('John Doe', 'test@example.com', longMessage)).toBe('Message cannot exceed 500 characters.');
//   });

//   it('should return null if input is valid', () => {
//     expect(validateForm('John Doe', 'test@example.com', 'Hello')).toBe(null);
//   });
// });
