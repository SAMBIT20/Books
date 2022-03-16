import React from "react";
import LogingGif from "../../assets/login-modal.gif";
import "./Notification.css";

const PleaseLogin = () => {
  return (
    <div className="alert-wrapper">
      <h2> Please Login</h2>
      <p>Page access only for login user</p>
      <div className="image-noti">
        <img src={LogingGif} alt="" />
      </div>
    </div>
  );
};

export default PleaseLogin;
