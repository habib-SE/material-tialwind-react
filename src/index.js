import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./Css/tailwind.css"
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './components/home/Home';
import Profile from './components/home/Profile';
 import Navbar from './components/Navbar';

const router = createBrowserRouter([
   <Navbar/>,
  {
    path: "/",
    element: <Navbar />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/home",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}/>
);

