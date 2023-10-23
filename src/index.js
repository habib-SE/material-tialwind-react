import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Css/tailwind.css"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Profile from './components/home/Profile';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}/>
);

