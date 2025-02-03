// Validation function
export const validateForm = (name: string, email: string, message: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const maxMessageLength = 500;

    if (!name || !email || !message) return 'Please fill out all fields.';
    if (!nameRegex.test(name)) return 'Name can only contain letters and spaces.';
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';
    if (message.length > maxMessageLength) return `Message cannot exceed ${maxMessageLength} characters.`;
    return null; // No errors  
};
