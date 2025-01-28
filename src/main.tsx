import React from "react"; // Import the main React Library.
import ReactDom from "react-dom/client"; // Import the React DOM library, which allows rendering React components to the browser's DOM (Document Object Model). React DOM bridges the gap between React components and the HTML structure displayed in the browser. 
import { MantineProvider } from "@mantine/core"; // Import MantineProvider to make use of the Mantine library.
import '@mantine/core/styles.css' // Import the default Mantine CSS styles.
import App from "./App"; // Import the main App component. The app component serves as the root component for the application, where you define the overall structure and behavior of the app.
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter from React Router. BrowserRouter is a component that enables routing, allowing users to navigate to different pages or views.
import { AppContextProvider } from "./contexts/AppContext";

// Use this method to initialize the React application and attach it to the DOM element.
ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode> {/* React.StrictMode is a wrapper that helps identify potential problems in the application. It runs additional checks and warnings */}
    <MantineProvider> {/* MantineProvider is a context provider that wraps the application to enable Mantine's features. */}
      <BrowserRouter> {/* BrowserRouter is responsible for handling client-side routing. It uses the broweser's history APO to keep the application in sych with the URL so full-page reloads are not needed for navigation*/}
        <AppContextProvider> {/* Wrap the app with the provider */}
          <App/> {/* Render the app component, the central part of the application containing the main logic of the application. */}
        </AppContextProvider>
      </BrowserRouter> 
    </MantineProvider>
  </React.StrictMode>
);