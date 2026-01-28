import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
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

    const whatsappMessage = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const phoneNumber = "250793308820"; // WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">

      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We’re here to help. Reach out directly via WhatsApp or our social channels!</p>
        </div>
      </section>

      {/* FORM & INFO */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <div className="contact-content">

          {/* Form */}
         <form className="contact-form" onSubmit={handleSubmit}>
  <label>Name</label>
  <input 
    type="text" 
    name="name" 
    value={formData.name} 
    onChange={handleChange} 
    placeholder="Your Name"
    required 
  />

  <label>Email</label>
  <input 
    type="email" 
    name="email" 
    value={formData.email} 
    onChange={handleChange} 
    placeholder="Your Email"
    required 
  />

  <label>Message</label>
  <textarea 
    name="message" 
    value={formData.message} 
    onChange={handleChange} 
    placeholder="Your Message"
    rows="5"
    required 
  />

  <div className="form-bottom">
    <button type="submit" className="btn whatsapp-btn">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
      Send via WhatsApp
    </button>

    <div className="social-icons-inline">
      <a href="https://www.facebook.com/profile.php?id=61585796972403" target="_blank" rel="noreferrer" title="Facebook">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook"/>
      </a>
      <a href="https://x.com/BAHO_e_health24" target="_blank" rel="noreferrer" title="X (Twitter)">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X"/>
      </a>
      <a href="https://www.instagram.com/baho_e_health_telemedicine24/?utm_source=qr&igsh=bGxhamI5MndobHcy" target="_blank" rel="noreferrer" title="Instagram">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram"/>
      </a>
      <a href="https://www.linkedin.com/in/baho-e-health-platform-telemedicine-b768b43a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn"/>
      </a>
      <a href="https://youtube.com/@classiclifetoo?si=G-UmPFdVFYhBZrci" target="_blank" rel="noreferrer" title="YouTube">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube"/>
      </a>
      <a href="tiktok.com/@bahoe_health" target="_blank" rel="noreferrer" title="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok"/>
      </a>
    </div>
  </div>
</form>


          {/* Contact Info */}
          <div className="contact-info">
            <h3>Our Contact Details</h3>
            <p>📧 Email: support@baho.org</p>
            <p>📞 Phone: +250 793 308 820</p>
            <p>🏠 Address: 123 Medical Avenue, Kigali, Rwanda</p>
            <p>💬 WhatsApp: <a href="https://wa.me/250793308820" target="_blank" rel="noreferrer">Chat with us</a></p>
          </div>
          

        </div>
        
      </section>

    </div>
  );
}
