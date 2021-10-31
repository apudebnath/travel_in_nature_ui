import React from 'react';
const NotFound = () => {
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/ZSZb7h4/404.jpg)', height: '90vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', image: 'fluid'}}  className="container-fluid d-flex justify-content-center align-items-center p-0 m-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-white p-3">
                    <h1 className="fs-1">404</h1>
                    <h4>Page Not Found!!! You are   looking for. Please try again.</h4>
                </div>
            </div>
        </div>
    );
};

export default NotFound;