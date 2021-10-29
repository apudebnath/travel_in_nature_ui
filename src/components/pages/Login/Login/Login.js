import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useFirebase from '../../../../Hooks/useFirebase';

const Login = () => {
    const{googleSignIn} = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={googleSignIn}>
                GOOGLE LOGIN
            </button>
        </div>
    );
};

export default Login;