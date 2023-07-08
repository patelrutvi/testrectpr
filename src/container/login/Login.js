import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginFm from './LoginFm';

function Login(props) {
    const Navigate = useNavigate()
   

    return (
        <div>
            <h1>Login</h1>
            <LoginFm />
        </div>
    );
}

export default Login;