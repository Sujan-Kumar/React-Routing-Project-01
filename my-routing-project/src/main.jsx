import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx';
import Header from './layout/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children:[
  {
      path: "/",
      element: <Home/>,
  }, 
  {
      path: "/About",
      element: <About/>,
  },
  {
      path:"/Contact",
      element: <Contact/>
  },
  {
      path: "*",
      element: <NotFound/>
  }
    ]
  },

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



