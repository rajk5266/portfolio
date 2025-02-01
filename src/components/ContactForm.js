import React, { useState } from "react";


const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show "Access Granted" message
    setSubmitted(true);

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };


  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="section-title">
          <h1 className="">CONNECT TO THE GRID</h1>
        </div>
        <div className="form-area">
          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Fingerprint Scanner Button */}
            {!submitted ? (
              <button type="submit" className="fingerprint-button">
                <img src="images/thumbprint.png" alt="Fingerprint Scanner" className="fingerprint-img" />
                <p>Initiate Transmission</p>
              </button>
            ) : (
              <p className="success-message">Access Granted ✅</p>
            )}

          </form>
        </div>
      </div>
    </section>

  );
};

export default ContactForm;
