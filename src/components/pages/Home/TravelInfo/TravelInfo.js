import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUmbrellaBeach, faHotel, faSnowflake, faWineGlass } from '@fortawesome/free-solid-svg-icons'
const ubeach = <FontAwesomeIcon icon={faUmbrellaBeach} />
const uhotel = <FontAwesomeIcon icon={faHotel} />
const usnow = <FontAwesomeIcon icon={faSnowflake} />
const uwine = <FontAwesomeIcon icon={faWineGlass} />

const TravelInfo = () => {
    return (
        <div className="container my-5">
            <h2>We Share Our Speciality</h2>
            <div className="row pt-5">
                <div className="col-md-6">
                    <h4 className="text-info text-start pb-3">WE ARE THE BEST IN TRAVEL PACKAGE</h4>
                    <div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="text-info">We have the best Travel Packages
                            </Accordion.Header>
                            <Accordion.Body>
                                Traveling is one of the best ways to learn more about yourself. Every day traveling brings a new set of issues and opportunities. The way you handle those also gives you insight into who you are. You'll come home knowing yourself better, and with a fresh perspective on what you want out of life.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Best travel guides available throught the trip
                            </Accordion.Header>
                            <Accordion.Body>
                                Traveling Improves Your Health. From cutting down on stress, to lowering your chances of developing a heart disease, the health benefits of traveling are huge. You may stay sitting on a chair all day long at the workplace: including some walking to your trip is sure to make your body feel better.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Complete packages till date
                            </Accordion.Header>
                            <Accordion.Body>
                                Travel has truly helped us better understand ourselves and our world. It has made us more compassionate, empathetic, and less afraid of differences. Travel has given us a wealth of life lessons that we could never learn from a book or in a classroom. Travel can be truly transformational.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Best prices and Discounts for Memberships.
                            </Accordion.Header>
                            <Accordion.Body>
                                Here are 24 signs you're a good traveler. Good: You go with the flow. Whether it's a flight delay or a noisy hotel neighbor, so much is beyond your control when you travel. Letting go is liberating, and accepting situations for what they are is part of the fun
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Various other features for a travel package.
                            </Accordion.Header>
                            <Accordion.Body>
                            We have delved into our data to see what our customers want when they are looking for their next sporty getaway. According to TravelInNature.com Group data, since May of this year, the number of sports-related bookings in mainland China has increased nearly 6.6 times.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Best  Gift and others Package
                            </Accordion.Header>
                            <Accordion.Body>
                            The most popular sports travel themes this summer. Rafting, hiking and swimming all grew rapidly in popularity this year, surpassing pre-pandemic figures for the same period. To cool off this summer, adventurous travellers in mainland
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
                <div className="col-md-6 ps-3">
                    <h4 className="text-start pb-3 text-info">OUR BEST FEATURES</h4>
                    <div className="row">
                        <div className="col-md-3 fs-1 d-flex justify-content-center align-items-center text-warning"><span>{ubeach}</span></div>
                        <div className="col-md-9 text-start">
                            <h5>Excellent Spot</h5>
                            <p>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 fs-1 d-flex justify-content-center align-items-center text-warning"><span>{uhotel}</span></div>
                        <div className="col-md-9 text-start">
                            <h5>Hotel to Stay</h5>
                            <p>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 fs-1 d-flex justify-content-center align-items-center text-warning"><span>{usnow}</span></div>
                        <div className="col-md-9 text-start">
                            <h5>Slope Adventure</h5>
                            <p>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 fs-1 d-flex justify-content-center align-items-center text-warning"><span>{uwine}</span></div>
                        <div className="col-md-9 text-start">
                            <h5>Smart Guide</h5>
                            <p>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelInfo;