import React, { useState } from "react";
import "./RegisterCHW.css";

export default function RegisterCHW() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  // Replace this with the admin's WhatsApp number (without + or 00)
  const adminWhatsAppNumber = "250793308820"; // Rwanda example

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !region) {
      alert("Please fill in all required fields!");
      return;
    }

    const msg = `Hello Admin, a new CHW registration request has been submitted:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "-"}\n` +
      `Region: ${region}\n\n` +
      `Please verify before adding to the system.`;

    const url = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    setMessageSent(true);
    setName(""); setPhone(""); setEmail(""); setRegion("");
  };

  return (
    <div className="register-chw-container">
      <h2>CHW Registration</h2>
      <p>Submit your details for verification. Admin will contact you via WhatsApp.</p>

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
          placeholder="Region Assigned *"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
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
