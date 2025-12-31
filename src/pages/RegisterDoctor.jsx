import React, { useState } from "react";
import "./RegisterDoctor.css";

export default function RegisterDoctor() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  // Replace this with the admin's WhatsApp number (without + or 00)
  const adminWhatsAppNumber = "250793308820"; // example: Rwanda +250791231993

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !specialization) {
      alert("Please fill in all required fields!");
      return;
    }

    // Prepare WhatsApp message
    const msg = `Hello Admin, a new doctor registration request has been submitted:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "-"}\n` +
      `Specialization: ${specialization}\n\n` +
      `Please verify before adding to the system.`;

    // Open WhatsApp
    const url = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    setMessageSent(true);
    setName("");
    setPhone("");
    setEmail("");
    setSpecialization("");
  };

  return (
    <div className="register-doctor-container">
      <h2>Doctor Registration</h2>
      <p>Please submit your details for verification. The admin will contact you via WhatsApp.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Specialization *"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
        />
        <button type="submit">Submit for Verification</button>
      </form>

      {messageSent && (
        <p className="success-message">
          ✅ Your registration request has been sent to the admin via WhatsApp!
        </p>
      )}
    </div>
  );
}
