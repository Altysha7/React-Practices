import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs';
import FirstBtn from './components/FirstBtn';
import CategoryList from './components/CategoryList';
import Electronics from './pages/Electronics';
import Furniture from './pages/Furniture';
import Decoration from './pages/Decoration';
import AutoProducts from './pages/AutoProducts';
import GardenProducts from './pages/GardenProducts';
import Counter from './pages/Counter';
import Rockpaperscissors from './pages/Rockpaperscissors';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Main from './pages/Main';
import Layout from './components/Layout';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/furniture",
        element: <Furniture />,
      },
      {
        path: "/Rockpaperscissors",
        element: <Rockpaperscissors />,
      },
      {
        path: "/GardenProducts",
        element: <GardenProducts />,
      },
      {
        path: "/AutoProducts",
        element: <AutoProducts />,
      },
      {
        path: "/Decoration",
        element: <Decoration />,
      },

    ]
  },

]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
