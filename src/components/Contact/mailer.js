import React from "react";
import "./mailer.css";
import emailjs from "@emailjs/browser";

const mailer = () => {
  function sendEmial(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_81v6iod",
        "template_ut4fd2j",
        e.target,
        "user_NuMcFR8CcUdpg5VPgUIbW"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!🚀 Form Sumbit SucessFuly 😊");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }
  return (
    <div className="form-box border mailer">
      <h1>Contact Form</h1>
      <form className="row row-mailer" onSubmit={sendEmial}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="4" className="form-control"></textarea>
        </div>

        <input
          type="submit"
          value="Send"
          className="form-control btn-primary"
        />
      </form>
    </div>
  );
};

export default mailer;
