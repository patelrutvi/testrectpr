import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../Product';
import ProtectedRoutes from './ProtectedRoutes';
import Course from '../container/course/Course';

function AdminRoutes(props) {
    return (
        <Routes>
            <Route path='/product' element={<Product />} />
            <Route path='/course' element={<Course/>}/>
        </Routes>
    );
}

export default AdminRoutes;