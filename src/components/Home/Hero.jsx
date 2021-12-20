import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="py-5 text-center text-white bg-primary">
        <div className="container py-5">
          <div className="row py-5">
            <div className="mx-auto col-lg-10">
              <h1 className="display-4 mb-4 ">
                Community driven, free Books from Teachers & Students
              </h1>
              <p className="lead mb-5">
                Unlike other virtual platforms, provides a library like an
                environment which facilitates complete peer to peer
                interactions, making them best suitable for learning purpose.
              </p>{" "}
              <Link
                to="/library"
                href="#"
                className="btn btn-lg btn-outline-light mx-1"
              >
                Take me to Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
