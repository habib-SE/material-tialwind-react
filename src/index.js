import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Css/tailwind.css"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Profile from './components/pages/Profile';
import App from './App';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

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
  },
  {
    path: "/signin",
    element: < SignIn/>,
  },
  {
    path: "/signup",
    element: < SignUp/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}/>
);

