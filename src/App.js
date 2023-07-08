import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminRoutes from '../src/Routes/AdminRoutes'
import UserRoutes from './Routes/UserRoutes';
import ProtectedRoutes from './Routes/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<UserRoutes />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Route>

    </Routes>
  );
}

export default App;
