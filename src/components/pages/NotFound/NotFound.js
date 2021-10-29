import React from 'react';
import img from '../../../images/img404.jpg';
const NotFound = () => {
    return (
        <div style={{backgroundImage: `url(${img})`, height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}  className="container-fluid d-flex justify-content-center align-items-center p-0 m-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-white">
                    <h1>404</h1>
                    <h4>Page Not Found!!! You are   looking for. Please try again.</h4>
                </div>
            </div>
        </div>
    );
};

export default NotFound;