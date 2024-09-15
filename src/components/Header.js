import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.JPG';

const Header = () => {
  return (
    <Navbar  bg="White" data-bs-theme="light">
      <Container>
        {/* Company Logo */}
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            width="100%"
            height="40"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Menu Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav  className="ms-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about-us'>About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact-us'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
