import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/login/Login';
import Hader from '../componentes/Hader';
import ProtectedRoutes from './ProtectedRoutes';

function UserRoutes(props) {
    return (
        <>
            <Hader />
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path='/' element={<Home />} />
                </Route>

                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    );
}

export default UserRoutes;