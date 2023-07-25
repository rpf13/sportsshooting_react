import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo_title_small.png'

const NavBar = () => {
  return (
    <Navbar
        expand="md"
        fixed="top"
    >
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
                <i className="fa-solid fa-trophy"></i>Matches
            </Nav.Link>
            <Nav.Link>
                <i className="fa-solid fa-right-to-bracket"></i>SignIn
            </Nav.Link>
            <Nav.Link>
                <i className="fa-solid fa-user-plus"></i>SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
