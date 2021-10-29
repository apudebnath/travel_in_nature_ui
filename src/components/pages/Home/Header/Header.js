import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner1.jpg';
import banner2 from '../../../../images/banner2.jpg';
import banner3 from '../../../../images/img404.jpg';

const Header = () => {
    return (
        <div className="container-fluid m-0 p-0"  >
            <Carousel style={{height: '100vh'}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    style={{height: '100vh'}}
                    src={banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    style={{height: '100vh'}}
                    src={banner2}
                    alt="Second slide"
                  />
            
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    style={{height: '100vh'}}
                    src={banner3}
                    alt="Third slide"
                  />
            
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;