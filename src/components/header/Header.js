import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="header d-flex justify-content-center align-items-center text-center">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Професійний ремонт вашого ПК</strong>
        </h1>
        <Link to="/repair" className="btn-custom">
          <strong>Тисни сюди!</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;

