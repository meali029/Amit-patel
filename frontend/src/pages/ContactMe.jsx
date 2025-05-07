import React, { useState } from 'react';
import '../styles/pages/contactme.css';
import Alert from '../components/Alert'; // Import Alert component

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', // 'message' is used for the message/question.
  });
  const [alert, setAlert] = useState(null); // State for alert message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the server
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone, // Include the phone field
          message: formData.message, // Use the 'message' field for the message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ message: 'Thank you for contacting us! We will get back to you shortly.', type: 'success' });
      } else {
        setAlert({ message: data.message || 'An error occurred while submitting your message.', type: 'error' });
      }

      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Hide alert after 3.5 seconds
      setTimeout(() => setAlert(null), 3500);

    } catch (err) {
      console.error('Error submitting form:', err);
      setAlert({ message: 'An error occurred while submitting your form.', type: 'error' });
      setTimeout(() => setAlert(null), 3500); // Hide alert after 3.5 seconds
    }
  };

  return (
    <div className="contact-me-container">
      <div className="contact-me-header">
        <h1>Contact Us</h1>
        <p>We're here to help! Please fill out the form below, and we’ll get back to you as soon as possible.</p>
      </div>

      <div className="contact-form-section">
        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <ul>
            <li>
              <img src="/imgs/location.png" alt="location" />
              <p>123 Dental Street, City, Country</p>
            </li>
            <li>
              <img src="/imgs/mail.png" alt="email" />
              <p>info@amitpatel.co.uk</p>
            </li>
            <li>
              <img src="/imgs/contact.png" alt="phone" />
              <p>02384 786345</p>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Get in Touch</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              placeholder="Your message"
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Display the alert */}
      {alert && <Alert message={alert.message} type={alert.type} />}
    </div>
  );
};

export default ContactMe;
