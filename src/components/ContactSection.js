import React, { useState } from "react";
import { sendEmail } from "../services/emailService"; // Import the EmailJS function
import { Ring } from "@uiball/loaders"; // Import Ring spinner from @uiball/loaders
import "../styles/contactSection.css"; // Import the CSS file

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Show loader

    // Send email using the imported function
    const isSuccess = await sendEmail(formData);

    setIsLoading(false); // Hide loader

    if (isSuccess) {
      setIsSubmitted(true); // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear the form

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Have questions or want to work with us? Reach out to us via the form
        below, or directly at:
      </p>
      <div className="contact-info">
        <a href="mailto:astechsolutions247@gmail.com" className="contact-link">
          📧 astechsolutions247@gmail.com
        </a>
        <a href="tel:+91-7906324770" className="contact-link">
          📞 +91-7906324770
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? (
            <Ring size={20} lineWeight={5} speed={2} color="#ffffff" /> // Use Ring spinner
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Fancy Success Message */}
      {isSubmitted && (
        <div className="success-message">
          <span>🎉</span> Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactSection;