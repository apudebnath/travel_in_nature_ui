import React from 'react';
import './BestSpots.css';

const BestSpots = () => {
    return (
        <div className="container py-5">
            <h2 className="pt-3">Best Place for Pleaser</h2>
            
            <div className="row">
                <div className="col-md-4 py-3">
                    <div className="placeOne  pt-5 rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/XXQq6HQ/img13.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">Sneak Peaks</h2>
                        <h5 className="text-end pe-3 titleTwo">Explore our backyard full of endless activities</h5>
                    </div>
                </div>
                <div className="col-md-4 py-3">
                    <div className="placeOne  pt-5 rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/yPn3vY9/place1.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">Remote Island</h2>
                        <h5 className="text-end pe-3 titleTwo">Explore World most beautiful place.</h5>
                    </div>
                </div>
                <div className="col-md-4 py-3">
                    <div className="placeOne  pt-5 rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/fNjq1Bd/place3.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">Rainbow mountains</h2>
                        <h5 className="text-end pe-3 titleTwo">One of the most beautiful places in the world -China.</h5>
                    </div>
                </div>
                <div className="col-md-4 py-3">
                    <div className="placeOne rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/qytfNfd/place4.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">The Fairy Pools</h2>
                        <h5 className="text-end pe-3 titleTwo">Scotland is filled with a number of beautiful places in the world.</h5>
                    </div>
                </div>
                <div className="col-md-4 py-3">
                    <div className="placeOne rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/34fwdPy/place5.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">Northern Lights</h2>
                        <h5 className="text-end pe-3 titleTwo">Iceland, in general, comes in the list of top three most beautiful places in the world.</h5>
                    </div>
                </div>
                <div className="col-md-4 py-3">
                    <div className="placeOne rounded shadow" style={{backgroundImage: 'URL(https://i.ibb.co/8gyB3Wm/place2.jpg)', height:"350px", width:'auto', backgroundPosition: 'center'}}>
                        <h2 className="text-end pt-5 pe-3 titleStyle">Keukenhof Park</h2>
                        <h5 className="text-end pe-3 titleTwo">Explore Netherlands one of the best places to travel in the world.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSpots;