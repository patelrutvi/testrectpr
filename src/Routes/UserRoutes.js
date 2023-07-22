import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/login/Login';
import Hader from '../componentes/Hader';
import ProtectedRoutes from './ProtectedRoutes';
import Course from '../container/course/Course';

function UserRoutes(props) {
    return (
        <>
            <Hader />
            <Routes>
                {/* <Route element={<ProtectedRoutes />}>
                    <Route path='/' element={<Home />} />
                </Route>

                <Route path='/login' element={<Login />} /> */}

                <Route path='/course' element={<Course/>}/>
            </Routes>
        </>
    );
}

export default UserRoutes;