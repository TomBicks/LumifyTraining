import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

//SELF NOTE!! Last Task completed = 24
//Start with npm start
//Video Tutorial for code: https://www.youtube.com/watch?v=jxyeh-BrUuI

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    {/* This is an index route; this one will render into the outlet in <Root> at "/"*/}
    <Route index element={ <HomePage /> }/>
    {/* type will be used with useParams in the Homepage element to hold the value of whatever path comes after "/", such as "/cat" or "/rabbit"; we'll use this to filter for pets */}
    <Route path=":type" element={ <HomePage/> }/>
    <Route path=":type/:id" element={ <PetDetailsPage/> }/>
    <Route path="search" element={ <SearchPage/> }/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
