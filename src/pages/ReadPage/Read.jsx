import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Read.css";
import PleaseLogin from "../../components/Notification/PleaseLogin";

const Read = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  return (
    <div className="pdf-viewer">
      {isAuthenticated ? (
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
      ) : (
        <PleaseLogin />
      )}
    </div>
  );
};

export default Read;
