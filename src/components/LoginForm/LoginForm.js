// LoginForm.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase text-center w-100">
          Вхід
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4" controlId="form3Example4cg">
            <Form.Label>Телефон*</Form.Label>
            <Form.Control
              type="phone"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              type="button"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
            >
              Отримати SMS
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
