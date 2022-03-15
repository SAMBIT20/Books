import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
const Errorpage = () => {
  return (
    <div className="error-wrapper">
      <div class="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        class="logo-404"
        alt="img"
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        class="meteor"
        alt="metor"
      />
      <p class="title">Oh no!!</p>
      <p class="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div align="center">
        <Link to="/" className="btn-back">
          Back to previous page
        </Link>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut"
        alt="astro"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        class="spaceship"
        alt="space"
      />
    </div>
  );
};

export default Errorpage;
