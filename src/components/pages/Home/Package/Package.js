import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
const cart = <FontAwesomeIcon icon={faCartPlus} />


const Package = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://quiet-fjord-24073.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div id="package" className="container py-5" >
            <h2>Toure Packages</h2>
            <div className="row">
                {
                    packages.map(pack => <div className="col-md-4"
                    key={pack._id}>
                    <div className="package m-3 border rounded  shadow">
                        <div className="image rounded">
                            <img className="img-fluid rounded" src={pack.img} alt="" />
                        </div>
                        <div className="title pt-3 px-3">
                            <h3>{pack.title}</h3>
                            <p>{pack.description.slice(0,50)}</p>
                        </div>
                        <hr />
                        <div className="row info overflow-hidden px-3 pb-3 pt-1">
                            <div className="col-md-6">
                                <h6>Duration: {pack.duration}</h6>
                                <h5>Price: ${pack.price}</h5>
                            </div>
                            <div className="col-md-6 pt-2">
                                <Link to={`/orderSubmission/${pack._id}`}><Button><span>{cart}</span> BookNow</Button></Link>
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