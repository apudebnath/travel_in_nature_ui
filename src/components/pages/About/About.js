import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyBillWave, faAward, faGlobeEurope, faWineGlass } from '@fortawesome/free-solid-svg-icons'
const money = <FontAwesomeIcon icon={faMoneyBillWave} />
const award = <FontAwesomeIcon icon={faAward} />
const globe = <FontAwesomeIcon icon={faGlobeEurope} />
const uwine = <FontAwesomeIcon icon={faWineGlass} />

const About = () => {
    return (
        <div className="container-fluid  m-0">
            <div style={{backgroundImage: 'url(https://i.ibb.co/vmmQmyg/aboutbanner.jpg)', height: '500px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', image: 'fluid'}}  className="container-fluid d-flex justify-content-center align-items-center p-0 m-0">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-white w-100">
                        <h2 className="fs-1">About US</h2>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="image">
                            <img className="img-fluid w-75" src="https://i.ibb.co/VWrn3dp/about1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contnet">
                            <h2 className="text-start">Get to know about us and relive our Journey</h2>
                            <p className="text-start">
                                We are NASDAQ listed company since 2003 with over 25,100 employees and over 200 million members, making it one of the leading online travel agencies in the world.

                                With more than .9 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over .5 million individual flight routes connecting more than 5,000 cities around the globe. When you combine this with our 24/7 English customer service and various other travel products, you can trust us to take care of your next trip.

                                This website is operated by travelinnature.com Travel Bangladesh Pte. Ltd. TravelInNature is part of the TSIV.com Group of companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="contnet">
                            <h2 className="text-end">Your all-in-one travel app.</h2>
                            <p className="text-end">
                            Book flights, hotels, trains and rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 20% more special offer only on the app!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image">
                            <img className="img-fluid w-75" src="https://i.ibb.co/TcfXkrV/aboutapp.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/VQVSgq6/aboutbanner1.jpg)', height: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', image: 'fluid'}}  className="container-fluid d-flex justify-content-center align-items-center p-5 m-0">
                <div className="row py-5 justify-content-center align-items-center">
                    <h2 className="pb-3 pt-5">Why Book With Us?</h2>
                    <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'rgba(202, 241, 238, 0.6)'}}>
                        <p><span className="text-warning" style={{fontSize: '40px'}}>{globe}</span></p>
                        <h5>Worldwide Coverage</h5>
                        <p>No matter where in the world you want the go, TravelInNature.Com has got you covered. From flights and hotels, to rental cars and attraction tickets, our extensive network connects all corners of the globe.</p>   
                    </div>
                    <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'rgba(202, 241, 238, 0.6)'}}>
                        <p><span className="text-warning" style={{fontSize: '40px'}}>{money}</span></p>
                        <h5>Competitive Pricing</h5>
                        <p>Having over 400 million members means that TravelInNature.Com can deliver competitive prices, saving you more on travel everyday. Register as a member to receive even bigger discounts!</p>   
                    </div>
                    <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'rgba(202, 241, 238, 0.6)'}}>
                        <p><span className="text-warning" style={{fontSize: '40px'}}>{award}</span></p>
                        <h5>Award-Winning Service</h5>
                        <p>With TravelInNature.Com you can always travel worry free knowing that we're here if you need us. Our customer service team speaks multiple languages, available 24 hours a day via phone or email.</p>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;