function Contact() {
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
