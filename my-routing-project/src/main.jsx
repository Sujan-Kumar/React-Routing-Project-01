import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx';
import Header from './layout/Header.jsx';
import Products from './pages/Products.jsx';
import SignIn from './pages/SignIn.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import UserProfile from './components/user/UserProfile.jsx';
import UserOrder from './components/user/UserOrder.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import AdminProfile from './components/admin/AdminProfile.jsx';
import AdminProducts from './components/admin/AdminProducts.jsx';
import AdminCategories from './components/admin/AdminCategories.jsx';
import AdminManageUsers from './components/admin/AdminManageUsers.jsx';
import AdminRoute from './pages/AdminRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    errorElement:<NotFound/>,
    children:[
  {
      path: "/",
      element: <Products/>,
  },
  {
    path:"/SignIn",
    element:<SignIn/>
  },
   {
    path:"/SignOut",
    element:<SignIn/>
  },
  {
      path: "/About",
      element: <About/>,
  },
  {
      path: "/dashboard/user",
      element: <ProtectedRoute/>,
      children:[
        {
          path:"profile",
          element:<UserProfile/>
        },
        {
          path:"orders",
          element:<UserOrder/>
        }
      ]
  },
  {
      path: "/dashboard/admin",
      element:<AdminRoute/>,
      children:[
        {
          path:"profile",
          element:<AdminProfile/>
        },
        {
          path:"products",
          element:<AdminProducts/>
        },
        {
          path:"categories",
          element:<AdminCategories/>
        },
        {
          path:"user",
          element:<AdminManageUsers/>
        },
      ]
  },
  {
      path:"/Contact",
      element: <Contact/>
  },
  {
    path:"/Products/:id",
    element:<ProductDetails/>
  },
    ]
  },

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



