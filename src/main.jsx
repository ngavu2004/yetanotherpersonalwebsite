import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import Welcome from './Welcome.jsx'
import MainPage from './pages/mainPage.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
