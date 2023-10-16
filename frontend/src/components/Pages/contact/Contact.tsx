function Contact() {
  return (
    <div className="contact-page">
      <form className="contact-form">
        <label> Name </label>
        <input placeholder="David Attenborough" />
        <label> Email address </label>
        <input placeholder="blueplanet@gmail.com" />
        <label> Subject: </label>
        <input placeholder="Saving the planet" />
      </form>
    </div>
  );
}

export default Contact;
