import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./GetInvolved.css";

// Initialize Supabase
const supabaseUrl = "https://hmozhdntdhftiatjxhfc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtb3poZG50ZGhmdGlhdGp4aGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDQ4MzUsImV4cCI6MjA4MTAyMDgzNX0.xifF4CfFvwIfAXsK-Ml2y4XBXznp5XMIh0ebrkSmcCo"; // replace with your key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Medical Specialist",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill all required fields!");
      setLoading(false);
      return;
    }

    // Insert into Supabase table
    const { error } = await supabase.from("applications").insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        message: formData.message,
        file_url: null, // removed file upload
      },
    ]);

    if (error) {
      alert("Submission failed: " + error.message);
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "Medical Specialist",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className="get-involved-container">
      <h1>Get Involved with BAHO</h1>
      <p>
        Join our mission to provide accessible, high-quality healthcare. 
        Whether you're a medical specialist or a volunteer, we welcome your contribution.
      </p>

      {submitted && (
        <div className="success-message">
          ✅ Thank you for applying! We will contact you soon.
        </div>
      )}

      <form className="involved-form" onSubmit={handleSubmit}>
        <label>
          Full Name<span>*</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email<span>*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone<span>*</span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Medical Specialist">Medical Specialist</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </label>

        <label>
          Message / Motivation
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us why you want to join BAHO..."
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}
