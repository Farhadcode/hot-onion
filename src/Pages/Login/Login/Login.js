import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { singInUseInGoogle } = useAuth()

    return (
        <div>
            <h2> Please Login</h2>
            <button onClick={singInUseInGoogle}> Google Sing In</button>
        </div>
    );
};

export default Login;