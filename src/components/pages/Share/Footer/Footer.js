import React from 'react';
import logo from '../../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faTumblr, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const fb = <FontAwesomeIcon icon = {faFacebook}/>
const tw = <FontAwesomeIcon icon = {faTwitter}/>
const ig = <FontAwesomeIcon icon = {faInstagram}/>
const tm = <FontAwesomeIcon icon = {faTumblr}/>
const you = <FontAwesomeIcon icon = {faYoutube}/>
const li = <FontAwesomeIcon icon = {faLinkedin}/>

const Footer = () => {
    return (
        <div className="container-fluid m-0 p-0" style={{backgroundColor: 'lightcoral'}}>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex justify-content-center">
                        <img src={logo} alt="" className="img-fluid" style={{width: '220px'}} />
                    </div>
                    <div className="fs-4 text-secondary">
                        <span className="ms-4">{fb}</span>
                        <span className="ms-4">{ig}</span>
                        <span className="ms-4">{you}</span>
                        <span className="ms-4">{tm}</span>
                        <span className="ms-4">{li}</span>
                        <span className="ms-4">{tw}</span>
                    </div>
                    <div className="pt-3">
                        <h5 className="text-center">Country you choose</h5>
                        <div className="d-flex justify-content-center">
                            <div>
                                <h6>USA</h6>
                                <h6>USA</h6>
                                <h6>USA</h6>
                                <h6>USA</h6>
                            </div>
                            <div>
                                <h6>USA</h6>
                                <h6>USA</h6>
                                <h6>USA</h6>
                                <h6>USA</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pt-3">
                    <h4>Facilities</h4>
                    <div className="text-secondary">
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                    </div>
                </div>
                <div className="col-md-3 pt-3">
                    <h4>Facilities</h4>
                    <div className="text-secondary">
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                    </div>
                </div>
                <div className="col-md-3 pt-3">
                    <h4>Facilities</h4>
                    <div className="text-secondary">
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                        <h6>Find a place</h6>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;