import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <form className="contact-form">
        <label> Name </label>
        <input type="text" name="Name" placeholder="David Attenborough" />

        <label> Email address </label>
        <input type="email" placeholder="blueplanet@gmail.com" />

        <label> Subject: </label>
        <input placeholder="Saving the planet" />

        <label> Message: </label>
        <textarea placeholder="Let's connect"></textarea>
      </form>
    </div>
  );
}

export default Contact;
