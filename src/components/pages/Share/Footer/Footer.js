import React from 'react';
import './footer.css';
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
        <div className="container-fluid pt-3" style={{backgroundColor: 'rgb(224, 241, 245)'}}>
            <div className="" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center">
                            <img src={logo} alt="" className="img-fluid" style={{width: '220px'}} />
                        </div>
                        <div className="fs-5 socialIcon">
                            <span className="ms-4">{fb}</span>
                            <span className="ms-4">{ig}</span>
                            <span className="ms-4">{you}</span>
                            <span className="ms-4">{tm}</span>
                            <span className="ms-4">{li}</span>
                            <span className="ms-4">{tw}</span>
                        </div>
                        <div className="pt-3">
                            <h5 className="">Contact us</h5>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <p className="py-0 my-0">777/53 First Street,<br /> FirmString, Welldisteare</p>
                                    <p className="py-0 my-0">595-959-488</p>
                                    <h6>travel@innature.com</h6>
                                    <h6>travelinnature.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-5">
                        <h4>Facilities</h4>
                        <div className="text-secondary fw-light">
                            <h6>Excellent transportation</h6>
                            <h6>Gorgeous accommodation</h6>
                            <h6>Food safety</h6>
                            <h6>Pleaser Entertainment</h6>
                            <h6>Well Service</h6>
                            <h6>More many</h6>
                        </div>
                    </div>
                    <div className="col-md-3 pt-5">
                        <h4>About Us</h4>
                        <div className="text-secondary">
                            <h6>About Travel In Nature</h6>
                            <h6>News and Careers</h6>
                            <h6>Terms and Conditions</h6>
                            <h6>Privacy Statement</h6>
                            <h6>Customer Support</h6>
                            <h6>More many</h6>
                        </div>
                    </div>
                    <div className="col-md-3 pt-5">
                        <h4>Others Services</h4>
                        <div className="text-secondary">
                            <h6>Investor Relations</h6>
                            <h6>TravelinNature Rewards</h6>
                            <h6>Affiliate Program</h6>
                            <h6>List My Hotel</h6>
                            <h6>All Hotels</h6>
                            <h6>Tours and Tickets</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 py-3 footerInfo">
                    <span>Copyright &copy; 2021 || All Right Reserved By Trave In Nature</span>
                    <span className="ps-5">Designed By - APU</span>
                </div>
            </div> 
        </div>
    );
};

export default Footer;