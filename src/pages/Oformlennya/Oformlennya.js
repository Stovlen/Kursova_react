import React, { useState } from "react";
import "./oformlennya.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

const Oformlennya = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };  

  const addPrefix = (event) => {
    const input = event.target;
    if (!input.value.startsWith("+38 ")) {
      input.value = "+38 " + input.value;
    }
  };

  const validateForm = (event) => {
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const phoneValue = document.getElementById("phone").value;
    const emailValue = document.getElementById("email").value;
    const repairType = localStorage.getItem("repairType") || "";

    const nameRegex = /^[а-яА-ЯІіЇїЄєҐґ']+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (nameValue === "") {
      document.getElementById("name-warning").innerText =
        "Будь ласка, введіть своє ім'я!";
    } else if (!nameRegex.test(nameValue)) {
      document.getElementById("name-warning").innerText =
        "Будь ласка, введіть лише кирилицю!";
    } else {
      document.getElementById("name-warning").innerText = "";
    }

    if (!phoneValue.startsWith("+38 ") || !/^\+38 \d{10}$/.test(phoneValue)) {
      document.getElementById("phone-warning").innerText =
        "Будь ласка, введіть правильний номер телефону!";
    } else {
      document.getElementById("phone-warning").innerText = "";
    }

    if (emailValue === "") {
      document.getElementById("email-warning").innerText =
        "Будь ласка, заповніть це поле!";
    } else if (!emailRegex.test(emailValue)) {
      document.getElementById("email-warning").innerText =
        "Будь ласка, введіть правильний email!";
    } else {
      document.getElementById("email-warning").innerText = "";
    }

    if (
      nameRegex.test(nameValue) &&
      phoneValue.startsWith("+38 ") &&
      /^\+38 \d{10}$/.test(phoneValue) &&
      emailRegex.test(emailValue)
    ) {
      // Зберігаємо дані у localStorage
      const formData = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        repairType: repairType,
      };
      localStorage.setItem("formData", JSON.stringify(formData));

      // Перенаправляємо на Result.js
      window.location.href = "/result";
    }
  };

  return (
    <header className="header2">
      <div className="header2__wrapper">
        <h1 className="header2__title">Оформлення заявки</h1>
        <ul className="customer">
          <li className="customer__item">Я новий користувач</li>
          <li className="customer__item">
            <a
              href="#!"
              className="customer-list_link"
              onClick={handleLoginClick}
            >
              Я постійний клієнт
            </a>
          </li>
        </ul>
        <div className="form-group">
          <label htmlFor="name">Ім'я</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field"
            required
          />
          <div id="name-warning" style={{ color: "red" }}></div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="input-field"
            placeholder="+38 "
            onFocus={addPrefix}
          />
          <div id="phone-warning" style={{ color: "red" }}></div>
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="input-field"
            required
          />
          <div id="email-warning" style={{ color: "red" }}></div>
        </div>

        <a
          href="#"
          className="btn-custom"
          onClick={(event) => validateForm(event)}
        >
          Надіслати
        </a>

        <div id="warning-message" style={{ color: "red" }}></div>
      </div>
      <LoginForm show={showLoginForm} handleClose={handleCloseLoginForm} />
    </header>
  );
};

export default Oformlennya;
