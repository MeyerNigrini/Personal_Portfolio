import axios from "axios";

const API_BASE_URL = "https://localhost:44308";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json; charset=utf-8"
    },
    
});

export default api;