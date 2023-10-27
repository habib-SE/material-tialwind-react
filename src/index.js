import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Css/tailwind.css"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Profile from './components/pages/Profile';
import App from './App';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Docs from './components/pages/Docs';

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
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
  },
  {
    path: "/docs",
    element: < Docs/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}/>
);

