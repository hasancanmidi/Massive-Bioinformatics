import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../assets/rickandmorty.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center mb-3 footer-logo">
            <img src={logo} alt="Logo" className="" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Row className="my-4">
              <Col md={12}>
                <p className="footer-text">&copy; Hasan Can Midi</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;