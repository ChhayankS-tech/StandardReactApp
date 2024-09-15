import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p className="mb-0">© 2024 Consulting Firm. All rights reserved.</p>
        <p className="mb-0">Follow us on: 
          <a href="#" className="text-white ms-2">LinkedIn</a> | 
          <a href="#" className="text-white ms-2">Twitter</a> | 
          <a href="#" className="text-white ms-2">Facebook</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
