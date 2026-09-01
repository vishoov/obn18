import React from 'react'
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';

import { useAuth } from '../auth/AuthContext'

const ProtectedRoute = ({children}) => {
    const { user } = useAuth();

    if(user!=null){
        return <Outlet />
    }else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute