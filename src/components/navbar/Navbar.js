// Navbar.js
import React, { useState } from "react";
import logo from "./../../img/logo.png";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false);
  };

const [showLoginForm, setShowLoginForm] = useState(false);

const handleLoginClick = () => {
  setShowLoginForm(true);
};

const handleCloseLoginForm = () => {
  setShowLoginForm(false);
};  

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center"
          >
            <img
              src={logo}
              alt="Logo"
              height="30"
              className="d-inline-block align-top me-2"
            />
            <span>Ремонт та модернізація ПК</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#!" onClick={handleRegisterClick}>
                Зареєструватися
              </Nav.Link>
              <Nav.Link href="#!" onClick={handleLoginClick}>
                Увійти
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegisterForm
        show={showRegisterForm}
        handleClose={handleCloseRegisterForm}
      />
      <LoginForm
        show={showLoginForm}
        handleClose={handleCloseLoginForm}
      />
    </>
  );
};

export default NavbarComponent;
