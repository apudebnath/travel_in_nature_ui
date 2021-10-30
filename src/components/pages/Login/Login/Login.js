import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import background from '../../../../images/banner1.jpg';

const Login = () => {
    const{googleSignIn } = useAuth();
    //const location = useLocation();
    const history = useHistory();
    //const redirect_uri = location.state?.from || '/home';
    
    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            console.log(result);
            //history.push(redirect_uri);
            history.goBack();
        })
        
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${background})`, height: "100vh"}}>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 w-100 text-center">
                    <h2 className="text-light pb-3"> Please Login</h2>
                    <button className="px-5 py-2 text-success border border-info rounded fw-bold" onClick={handleGoogleLogin}>
                        GOOGLE LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;