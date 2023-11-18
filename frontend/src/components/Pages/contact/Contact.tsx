import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"

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
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact</h1>
        <div>
        <label htmlFor="username"> Name </label>
        <br/>
        <input
        id="username"
          type="text"
          name="user_name"
          placeholder="Name"
          value={formData.user_name}
          onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="email"> Email address </label>
        <br/>
        <input
        id="email"
          type="email"
          name="user_email"
          placeholder="Email address"
          value={formData.user_email}
          onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="subject"> Subject </label>
        <br/>
        <input
        id="subject"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={formData.subject}
        />
        </div>
       
       <div>
       <label htmlFor="message"> Message </label>
        <br/>
        <textarea
          id="message"
          onChange={handleChange}
          name="message"
        ></textarea>
        <br/>
        <div className="buttoncontainer">
        <button type="submit" value="Submit">Submit</button>
        </div>
        
    
       </div>
    </form>
    </div>
  );
};

export default ContactForm;
