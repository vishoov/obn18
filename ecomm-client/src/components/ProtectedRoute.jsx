import React from 'react'
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = true;

    if(isAuthenticated){
        return <Outlet />
    }else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute