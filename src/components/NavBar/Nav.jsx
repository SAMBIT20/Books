import React from "react";
import "./Nav.css";
import Logo from "../../assets/new-logo.gif";
import { Routes, Route, Link } from "react-router-dom";

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
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
