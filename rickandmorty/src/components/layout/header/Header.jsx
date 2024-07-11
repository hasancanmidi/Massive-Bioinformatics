import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Button } from "react-bootstrap";
import logo from '../../../assets/rickandmorty.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#0F0F0F" }} className="header" data-bs-theme="dark" expand="md">
        <Navbar.Brand href="#home" className="navbar-brand py-3 m-0">
          <img
            src={logo}
            className="d-inline-block align-top "
            alt="Rick And Morty"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" href="#home" className="tab">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/episodes" href="#episode" className="tab">
            Episode
          </Nav.Link>
          <Nav.Link as={Link} to="/characters" href="#characters" className="tab">
            Characters
          </Nav.Link>
          <Nav.Link as={Link} to="/about-project" href="#about-project" className="tab">
            About Project
          </Nav.Link>
          <Nav.Link as={Link} to="/about-me" href="#about-me" className="tab">
            About Me
          </Nav.Link>
        </Nav>
        <Button as={Link} to="/episodes" variant="outline-light" className="lets-watch btn-lg rounded-pill py-3 px-4 border-1">
          Let's Watch!
        </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;