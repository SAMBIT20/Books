import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/new-logo.gif";
import Login from "./Login";
import Logout from "./Logout";
import GietLogo from "../../assets/giet-logo.png";
import "./Nav.css";
const NewNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
      <div className="container">
        {" "}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img className="logo-books" src={Logo} alt="" />
          <div className="giet-logo-container">
            <img src={GietLogo} alt="giet" className="giet-log" />
          </div>
        </Link>{" "}
        <button
          className="navbar-toggler navbar-toggler-right border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbar4"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar4">
          <ul className="navbar-nav mr-auto pl-lg-4">
            <li className="nav-item px-lg-2 active">
              {" "}
              <Link to="/" className="nav-link">
                {" "}
                <span className="d-inline-block d-lg-none icon-width">
                  <i className="fas fa-home"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="nav-item px-lg-2">
              {" "}
              <Link to="/library" className="nav-link">
                <span className="d-inline-block d-lg-none icon-width">
                  <i className="fas fa-spa"></i>
                </span>
                Library
              </Link>{" "}
            </li>

            <li className="nav-item px-lg-2">
              {" "}
              <Link to="/contact" className="nav-link">
                <span className="d-inline-block d-lg-none icon-width">
                  <i className="far fa-envelope"></i>
                </span>
                Contact
              </Link>{" "}
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
            <li className="nav-item">
              {" "}
              <a className="nav-link">
                <i className="fab fa-twitter"></i>
                <span className="d-lg-none ml-3">Twitter</span>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link">
                <i className="fab fa-facebook"></i>
                <span className="d-lg-none ml-3">Facebook</span>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link">
                <i className="fab fa-instagram"></i>
                <span className="d-lg-none ml-3">Instagram</span>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link">
                <i className="fab fa-linkedin"></i>
                <span className="d-lg-none ml-3">Linkedin</span>
              </a>{" "}
            </li>
          </ul>
          <Login />
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
