import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
// import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetails/PostDetail';
import Error from './Components/Error/Error';

// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <Error></Error> ,
    children: [
      {
        path: '/about',

        element: <About></About>
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path : '/users',
        loader :() => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },
      {
        path : '/user/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) , 
        element : <PostDetail></PostDetail>
      },

    ],
     
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
