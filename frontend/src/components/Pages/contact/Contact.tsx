import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser"; //node module is missing

interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
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
            setFormData({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-page">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label> Name </label>
        <input
          type="text"
          name="user_name"
          placeholder="David Attenborough"
          value={formData.user_name}
          onChange={handleChange}
        />

        <label> Email address </label>
        <input
          type="email"
          name="user_email"
          placeholder="blueplanet@gmail.com"
          value={formData.user_email}
          onChange={handleChange}
        />

        <label> Subject: </label>
        <input
          name="subject"
          placeholder="Saving the planet"
          onChange={handleChange}
          value={formData.subject}
        />

        <label> Message: </label>
        <textarea
          onChange={handleChange}
          name="message"
          placeholder="Let's connect"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
