import React from "react";
import "./Nav.css";
import Logo from "../../assets/new-logo.gif";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="div-left">
        <a href="#">
          <img className="logo-books" src={Logo} alt="" />
        </a>
      </div>
      <div className="div-right">
        <ul>
          <li>
            <a href="#">Library</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
