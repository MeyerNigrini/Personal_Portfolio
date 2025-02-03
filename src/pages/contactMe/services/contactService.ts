// src/services/contactService.ts
import api from "../../../services/apiService";

export const submitContactForm = async (name: string, email: string, message: string) => {
    await api.post('/ContactMe', { name, email, message });
};
