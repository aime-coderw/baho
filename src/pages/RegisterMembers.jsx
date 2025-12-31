import React, { useState } from "react";
import "./RegisterMember.css";

export default function RegisterMember() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(""); // hospital, health worker, student, volunteer
  const [role, setRole] = useState(""); // optional, for nurses, midwives, etc.
  const [location, setLocation] = useState(""); // optional, for hospitals or volunteers
  const [messageSent, setMessageSent] = useState(false);

  // Admin WhatsApp number
  const adminWhatsAppNumber = "250793308820";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !category) {
      alert("Please fill in all required fields!");
      return;
    }

    const msg = `Hello Admin, a new member registration request has been submitted:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "-"}\n` +
      `Category: ${category}\n` +
      `Role: ${role || "-"}\n` +
      `Location: ${location || "-"}\n\n` +
      `Please verify and add to the system.`;

    const url = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    setMessageSent(true);
    setName(""); setPhone(""); setEmail(""); setCategory(""); setRole(""); setLocation("");
  };

  return (
    <div className="register-member-container">
      <h2>Members Registration</h2>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category *</option>
          <option value="hospital">Hospital / Institution</option>
          <option value="health_worker">Health Worker (Nurse, Midwife, etc.)</option>
          <option value="student">Medical Student</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <input
          type="text"
          placeholder="Role / Specialization (optional)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location / City (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
