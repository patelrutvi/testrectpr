import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminRoutes from '../src/Routes/AdminRoutes'
import UserRoutes from './Routes/UserRoutes';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import { configure } from '@testing-library/react';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';

function App() {

  const store = configureStore()
  return (
    <Provider store={store}>
      <Routes>

        <Route path='/*' element={<UserRoutes />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Route>

      </Routes>
    </Provider>
  );
}

export default App;
