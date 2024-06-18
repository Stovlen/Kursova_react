// RegisterForm.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./RegisterForm.css";

const RegisterForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase text-center w-100">
          Створити акаунт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4" controlId="form3Example1cg">
            <Form.Label>Ім'я*</Form.Label>
            <Form.Control
              type="text"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="form3Example4cg">
            <Form.Label>Телефон*</Form.Label>
            <Form.Control
              type="phone"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="form3Example3cg">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="form3Example4cg">
            <Form.Label>Пароль*</Form.Label>
            <Form.Control
              type="password"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="form3Example4cdg">
            <Form.Label>Повторити пароль</Form.Label>
            <Form.Control
              type="password"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              type="button"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
            >
              Зареєструватися
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterForm;
