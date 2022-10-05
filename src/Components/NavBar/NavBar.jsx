import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../../Assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="white" variant="light"  expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LOGO}
              width="245.28px"
              height="44.22px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">
                <h6 className="nav-color-home">Home</h6>
              </Nav.Link>
              <Nav.Link href="#Whatwedo">
                <h6 className="nav-color">What we do</h6>
              </Nav.Link>
              <Nav.Link href="#aboutus">
                <h6 className="nav-color">About us</h6>
              </Nav.Link>
              <Nav.Link href="#contact">
                <h6 className="nav-color">Contacts</h6>
              </Nav.Link>
              <Nav.Link href="#consultant pl-5px" className="consultant">
                <h6 className="nav-color box">Consultant</h6>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
