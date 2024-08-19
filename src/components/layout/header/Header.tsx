import React from 'react';
import { Navbar as BootstrapNavbar, Container, Image, Nav } from 'react-bootstrap';
import { logo } from '../../../assert/img';

const Header = () => {
 
  
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" className="en-movies__navbar"  sticky="top">
      <Container>
      <BootstrapNavbar.Brand href="/"><Image className="en-movies-logo" src={logo} width={80} alt="en-movies-logo" /> <span className='logo-text'>Movies</span></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link  href="/#projects">Movies</Nav.Link>

        </Nav>
      </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );


 
};

export default Header;
