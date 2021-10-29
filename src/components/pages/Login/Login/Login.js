import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';


const Login = () => {
    const{googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    //const redirect_uri = location.state?.from || '/home';
    
    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            //history.push(redirect_uri);
            history.goBack();
        })
    }
    
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>
                GOOGLE LOGIN
            </button>
        </div>
    );
};

export default Login;