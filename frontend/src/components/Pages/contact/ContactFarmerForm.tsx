import React, { useRef, FormEvent, useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import UserContext from "../../../utils/UserContext";

interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

interface ContactFarmerFormProps {
  defaultEmail?: string;
  onClose: () => void;
}

const ContactFarmerForm: React.FC<ContactFarmerFormProps> = ({ defaultEmail, onClose }) => {
  const userContext = useContext(UserContext);
  const currentUserEmail = userContext.currentUser?.email || "";
  console.log("Item's farmer email: ", defaultEmail)

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: currentUserEmail,
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

  useEffect(() => {
    if (currentUserEmail) {
      setFormData((prevData) => ({
        ...prevData,
        user_email: currentUserEmail,
      }));
    }
  }, [currentUserEmail]);

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
              user_email: currentUserEmail,
              subject: "",
              message: "",
            });
            onClose();
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
        <div>
          <label htmlFor="username"> Name </label>
          <br />
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
          <label htmlFor="subject"> Subject </label>
          <br />
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
          <br />
          <textarea
            id="message"
            onChange={handleChange}
            name="message"
          ></textarea>
          <br />
          <div className="buttoncontainer">
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </div>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default ContactFarmerForm;
