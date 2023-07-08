import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


function ProtectedRoutes(props) {
    let loginstatus = localStorage.getItem("logintest")
    console.log('login', loginstatus);
    return (
        loginstatus ? <Outlet /> : <Navigate to={'./login'} />
    );
}

export default ProtectedRoutes;