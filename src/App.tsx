import { Route, Routes } from 'react-router-dom'; // Route and Routes from React Router are used to define the routing structure of the application.
import { HeaderSimple } from './components/HeaderSimple';
import Home from './pages/home/home'; // Import the Home component, which is needed for defining routes.
import Hobbies from './pages/hobbies/hobbies';
import Details from './pages/details/details';
import ContactMe from './pages/contactMe/ContactMe';
import CV from './CV';

function App() { // Define the app component.
  return (
    <div>
      <HeaderSimple/>
      <Routes> {/* The Routes component acts as a container for all the Route components. It make sure that only one route is rendered at a time based on the URL */}
        <Route path='/' element={<Home />} /> {/* Define the Route that matches the root path ("/"). When this path is accessed, the home component is rendered. "element" prop specifies the component to render for this route.  */}
        <Route path='/hobbies' element={<Hobbies />}/>
        <Route path='/contactme' element={<ContactMe />}/>
        <Route path='/details' element={<Details />}/>
        <Route path='/cv' element={<CV />}/>
      </Routes>
    </div>
  )
}

export default App
