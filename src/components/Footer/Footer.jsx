import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import GiLogo from "../../assets/giet-logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Books</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/library">Library</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="#">Redeading</a>
                </li>
                <li>
                  <a href="#">Page Loading</a>
                </li>
                <li>
                  <a href="#">Content Error</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  <a href="#">
                    Baniatangi, Po: Bajapur, Khordha, Odisha Pin - 752060
                  </a>
                  <img src={GiLogo} alt="giet" className="footer-logo" />
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
