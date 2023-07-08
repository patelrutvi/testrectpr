import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../Product';
import ProtectedRoutes from './ProtectedRoutes';

function AdminRoutes(props) {
    return (
        <Routes>
            <Route path='/product' element={<Product />} />
        </Routes>
    );
}

export default AdminRoutes;