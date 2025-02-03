import React, {createContext, useState, ReactNode, useContext} from "react";

// Define the context (Any data you want to share accross the app)
interface AppContextType {
    name: string;
    email: string;
    message: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component to wrap app and provide context
interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    return (
        <AppContext.Provider value={{ name, email, message, setName, setEmail, setMessage }}>
          {children}
        </AppContext.Provider>
      );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider")
    }
    return context;
};
