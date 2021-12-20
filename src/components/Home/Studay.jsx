import React from "react";

import "./Study.css";
const Studay = () => {
  return (
    <div className="study-wrapper">
      <div className="study-heading">
        <h2>STUDY AT HOME</h2>
        <p>Educational materials available for all subjects of Technology.</p>
      </div>
      <div className="div-content">
        <ul>
          <li className="background-one">
            {" "}
            <i class="fas fa-laptop"></i>Computer Science & Engineering
          </li>
          <li className="background-two">
            <i class="fas fa-charging-station"></i>Electrical Engineering
          </li>
          <li className="background-one">
            <i class="fas fa-network-wired"></i>Electrical & Computer
            Engineering
          </li>
          <li className="background-two">
            <i class="fas fa-hotel"></i>Civil Engineering
          </li>
          <li className="background-one">
            <i class="fas fa-hammer"></i>Mechanical Engineering
          </li>
          <li className="background-two">
            <i class="far fa-keyboard"></i>
            Electronics & Communication Engineering
          </li>
          <li className="background-one">
            <i class="far fa-file-code"></i>Web app Devlopment
          </li>
          <li className="background-two">
            <i class="fab fa-android"></i>Android app development
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Studay;
