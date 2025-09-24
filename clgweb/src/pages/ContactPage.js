import React, { useState } from "react";
import "./ContactPage.css";


function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Here you can add logic to send the form data to a backend or email service
  };

  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> info@dypcet.edu.in</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Address:</strong> Kolhapur, Maharashtra, India</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
        />
        {errors.name && <span id="name-error" className="error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && <span id="email-error" className="error">{errors.email}</span>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && <span id="message-error" className="error">{errors.message}</span>}

        <button type="submit">Send Message</button>
        {submitted && <div className="success">Thank you for contacting us!</div>}
      </form>
    </div>
  );
}

export default ContactPage;
