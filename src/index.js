import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Css/tailwind.css"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Profile from './components/home/Profile';
import App from './App';
import Home from './components/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
  },
  {
    path: "/home",
    element: < Home/>,
  },
  {
    path: "/profile",
    element: < Profile/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}/>
);

