import React from "react";
import { useLocation } from "react-router-dom";

import "./Read.css";

const Read = () => {
  const location = useLocation();
  return (
    <div className="pdf-viewer">
      <div className="top-div">
        <iframe
          src={location.state.pdffile + "#toolbar=0"}
          width="640"
          height="750"
          frameBorder="0"
          scrolling="no"
          seamless=""
        ></iframe>

        <div className="buttom-div">&nbsp;</div>
      </div>
    </div>
  );
};

export default Read;
