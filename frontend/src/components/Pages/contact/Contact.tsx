import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// please npm i @emailjs/browser

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfwul6l",
        "template_6f9qbbv",
        form.current,
        "dNCiOIBTGl8vZ-Plb"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label> Name </label>
        <input type="text" name="user_name" placeholder="David Attenborough" />

        <label> Email address </label>
        <input
          type="email"
          name="user_email"
          placeholder="blueplanet@gmail.com"
        />

        <label> Subject: </label>
        <input placeholder="Saving the planet" />

        <label> Message: </label>
        <textarea
          name="message"
          placeholder="Let's connect"
          value="Send"
        ></textarea>
      </form>
    </div>
  );
}

export default Contact;
