import React from "react";
import "./mailer.css";
import emailjs from "@emailjs/browser";
import Whatsapp from "../../assets/group-wp.jpeg";
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
    <section>
      <h2 className="contact-pg-header">
        Need to add any Book ? Either fill out the form with your inquiry or{" "}
        <br />
        join the support team WhatsApp group using the WhatsApp Group QR Code.
      </h2>
      <div className="contact-wrapper">
        <div className="form-box border mailer">
          <h1>Request Form</h1>
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
              <label>Book Detail </label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Write your book name and department"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Send"
              className="form-control btn-primary"
            />
          </form>
        </div>
        <div className="wp-img-wrapper">
          <img src={Whatsapp} alt="whatdapp" className="whatsapp-img" />
        </div>
      </div>
    </section>
  );
};

export default mailer;
