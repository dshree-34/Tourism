import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <p>
        If you have any questions or inquiries, feel free to reach out to us. We are here to assist you on your travel journey!
      </p>
      <div className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
