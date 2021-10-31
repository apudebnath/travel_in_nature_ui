import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="container-fluid m-0 p-0"  >
            <Carousel >
                <Carousel.Item >
                  <img
                    className="d-block img-fluid"
                    style={{ width: '100%', height:'530px',objectFit:'cover'}}
                    src="https://i.ibb.co/6sMJ2ky/banner1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{fontSize: '48px'}}>Nature Cutting down on Stress</h3>
                    <p style={{fontSize: '22px'}}>Traveling is one of the best ways to enjoy more about yourself.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    style={{ width: '100%', height:'530px',objectFit:'cover'}}
                    src="https://i.ibb.co/q1p9M7h/banner2.jpg"
                    alt="Second slide"
                  />
            
                  <Carousel.Caption>
                    <h3 style={{fontSize: '48px'}}>Explore TravelINnature in the Winter</h3>
                    <p style={{fontSize: '22px'}}>Some of the most beautiful places in the world, breathtaking waterfalls, and adventure.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    style={{ width: '100%', height:'530px',objectFit:'cover'}}
                    src="https://i.ibb.co/NLW0zsF/banner3.jpg"
                    alt="Third slide"
                  />
            
                  <Carousel.Caption>
                    <h3 style={{fontSize: '48px'}}>Live unforgettable experiences</h3>
                    <p style={{fontSize: '22px'}}>Our fantastic destinations are ready for your visit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;