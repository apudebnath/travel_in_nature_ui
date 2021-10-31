import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../Hooks/useAuth';
import logo from '../../../../images/logo.png';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <div >
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                    <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img src={logo} 
                        alt=""
                        width="250"
                        height= "60" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls= "responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{fontSize: '16px', fontWeight: '500'}}>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#package">Package</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {!user?.email ? <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        :
                        <div className="d-flex justify-content-between">
                            <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>
                            <Nav.Link className="px-1" as={Link} to="/myOrder">My Order</Nav.Link>
                            <Nav.Link as={Link} to="/manageOrder">Manage Order</Nav.Link>
                            <Button onClick={logOut} className="bg-info border border-primary rounded py-0 my-0"  size="small">LogOut</Button> 
                        </div> }
                    </Nav>
                    <Navbar.Text>
                        <span className=" ps-3">Signed:</span> <span className="fw-bold text-success">{user.email}</span>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Navigation;