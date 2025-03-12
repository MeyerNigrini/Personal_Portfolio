import { useState, useEffect } from "react";
import api from "../services/apiService"; // Adjust the import path based on your project structure

// Custom hook to fetch data from an API endpoint
function useFetchData<T>(endpoint: string, initialState: T) {
    // State to store fetched data
    const [data, setData] = useState<T>(initialState);
    // State to store error messages if the request fails
    const [error, setError] = useState<string | null>(null);
     // State to track the loading state
     const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true); // Start loading when effect is triggered
        
        api.get(endpoint) // Fetch data from the provided API endpoint
            .then((response) => {
                setData(response.data); // Store the fetched data in state
                setLoading(false); // Stop loading when data is fetched
            })
            .catch((err) => {
                setError(err.message); // Store the error message if request fails
                setLoading(false); // Stop loading even if there was an error
            });
    }, [endpoint]); // Re-run effect when endpoint changes to fetch new data dynamically

    return { data, error, loading  }; // Return the fetched data and error state
}

export default useFetchData; // Export the custom hook for use in other components
