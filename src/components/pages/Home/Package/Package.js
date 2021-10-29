import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Package = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div id="package" className="container" >
            <h2>Toure Packages</h2>
            <div className="row">
                {
                    packages.map(pack => <div className="col-md-4"
                    key={pack.food}>
                    <div className="package m-3">
                        <div className="image">
                            <img className="img-fluid" src={pack.img} alt="" />
                        </div>
                        <div className="title pt-3 px-3">
                            <h3>{pack.title}</h3>
                            <p>{pack.description.slice(0,50)}</p>
                        </div>
                        <div className="row info overflow-hidden px-3 pb-3">
                            <div className="col-md-6">
                                <h6>Duration: {pack.duration}</h6>
                                <h5>Price: ${pack.price}</h5>
                            </div>
                            <div className="col-md-6">
                                <Button>BookNow</Button>
                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Package;