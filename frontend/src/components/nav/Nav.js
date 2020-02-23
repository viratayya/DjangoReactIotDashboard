import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CustomNav() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="#">IOT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/" className="nav-link">Http</Link></Nav.Link>
          <Nav.Link><Link to="/ws" className="nav-link">WebSocket</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNav;
