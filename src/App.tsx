import { Route, Routes } from 'react-router-dom'; // Route and Routes from React Router are used to define the routing structure of the application.
import Home from './Home'; // Import the Home component, which is needed for defining routes.

function App() { // Define the app component.
  return (
    <Routes> {/* The Routes component acts as a container for all the Route components. It make sure that only one route is rendered at a time based on the URL */}
      <Route path='/' element={<Home />} /> {/* Define the Route that matches the root path ("/"). When this path is accessed, the home component is rendered. "element" prop specifies the component to render for this route.  */}
    </Routes>
  )
}

export default App
