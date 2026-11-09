import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import SignIn from './SignIn';

const ProtectedRoute = () => {
    const location  = useLocation();

    const isSignedIn = localStorage.getItem('isSignIn') && JSON.parse(localStorage.getItem("isSignIn"));

    return isSignedIn?<Outlet/>:<SignIn/>
}

export default ProtectedRoute
