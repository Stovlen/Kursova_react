import React from "react";
import { Link } from "react-router-dom";
import "./result.css";
import gal from "./../../img/Галочка.png";

const Result = () => {
  return (
    <header className="header1">
      <div className="container">
        <div className="header1__wrapper">
          <h1 className="header1__title">Ремонт</h1>
          <div className="line mb-4"></div>
          <div className="position-relative">
            <h1 className="header1__title1 text-center">Ваша заявка відправлена</h1>
            <Link
              to="/orders"
              className="btn btn-primary position-absolute top-0 end-0"
            >
              Переглянути заявку
            </Link>
          </div>
          <div className="checkmark mt-4 mb-4">
            <img src={gal} alt="Галочка" />
          </div>
          <h1 className="header1__title2 mb-5">
            Очікуйте подальших вказівок по телефону
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Result;

