import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello From React Router</div>,
  },
  {
    path: "/about",
    element: <div className="">I am from the about page</div>
  },
  {
    path: "/contact",
    element: <div>Call me right Now!!</div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
