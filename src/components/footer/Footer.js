import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import viber from "./../../img/Viber.png";
import inst from "./../../img/Inst.png";
import whatsapp from "./../../img/Whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer bg-success text-white py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mb-3">
            <ul className="list-inline">
              <li className="list-inline-item mx-4">
                <a href="#!">
                  <img src={viber} alt="Viber" className="social-icon" />
                </a>
              </li>
              <li className="list-inline-item mx-4">
                <a href="#!">
                  <img src={inst} alt="Instagram" className="social-icon" />
                </a>
              </li>
              <li className="list-inline-item mx-4">
                <a href="#!">
                  <img src={whatsapp} alt="Whatsapp" className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item mx-3">
                <a href="#!" className="about-list_link">
                  Контакти
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#!" className="about-list_link">
                  Trade In
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#!" className="about-list_link">
                  Оплата
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
