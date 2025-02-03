import { useState, useEffect } from "react";
import api from "../services/apiService"; // Adjust the import path based on your project structure

// Custom hook to fetch data from an API endpoint
function useFetchData<T>(endpoint: string, initialState: T) {
    // State to store fetched data
    const [data, setData] = useState<T>(initialState);
    // State to store error messages if the request fails
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get(endpoint) // Fetch data from the provided API endpoint
            .then((response) => {
                setData(response.data); // Store the fetched data in state
            })
            .catch((err) => {
                setError(err.message); // Store the error message if request fails
            });
    }, [endpoint]); // Re-run effect when endpoint changes to fetch new data dynamically

    return { data, error }; // Return the fetched data and error state
}

export default useFetchData; // Export the custom hook for use in other components
