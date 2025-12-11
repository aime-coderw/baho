import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./PatientCare.css";

// Supabase setup
const supabaseUrl = "https://hmozhdntdhftiatjxhfc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtb3poZG50ZGhmdGlhdGp4aGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDQ4MzUsImV4cCI6MjA4MTAyMDgzNX0.xifF4CfFvwIfAXsK-Ml2y4XBXznp5XMIh0ebrkSmcCo";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function PatientCare() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    help_type: "Medical",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Insert into Supabase
    const { error } = await supabase
      .from("patient_requests")
      .insert([formData]);

    if (error) {
      alert("Submission failed: " + error.message);
    } else {
      setSuccess("Your request has been submitted! We will contact you soon.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        help_type: "Medical",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <div className="patient-care-container">
      <h1>Patient Care Request</h1>
      <p>Please fill out the form below so we can assist you.</p>

      {success && <p className="success-message">{success}</p>}

      <form className="patient-care-form" onSubmit={handleSubmit}>
        <label>
          Full Name<span>*</span>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
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
          Type of Help<span>*</span>
          <select name="help_type" value={formData.help_type} onChange={handleChange}>
            <option value="Medical">Medical</option>
            <option value="Counseling">Counseling</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Message / Details
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your situation or request..."
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
