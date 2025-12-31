import React, { useState } from "react";
import "./Appointments.css";
import Profile from "../assets/icons/account.png";

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subservice: "",
    date: "",
    message: "",
  });

  // Main services and their subservices
  const services = {
    Diagnostics: ["Blood Test", "X-Ray", "MRI Scan", "Ultrasound"],
    ChronicCare: ["Diabetes Management", "Hypertension Monitoring", "Asthma Care"],
    HomeCare: ["Nursing Care", "Rehabilitation", "Elderly Care"],
    "Preventive Programs": ["Annual Check-Up", "Vaccinations", "Cancer Screening", "Nutrition Counseling"],
    GlobalCare: ["International Specialists", "Medical Travel", "Record Transfer"],
    "Mental Health": ["Counseling", "Therapy Sessions", "Group Therapy"],
    TeleCare: ["Virtual Consultations", "Follow-Up Calls", "Remote Monitoring"],
    ePharmacy: ["Prescription Refills", "Medicine Delivery", "Consult Pharmacist"],
    LifeTrack: ["Fitness Tracking", "Health Reports", "Chronic Disease Monitoring"],
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value,
      ...(e.target.name === "service" && { subservice: "" }) // reset subservice on service change
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${formData.name}. I want to book an appointment for ${formData.service} - ${formData.subservice} on ${formData.date}. My phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/250791231993?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="appointments-page">
      <section className="appointments-hero">
        <h1>Book an Appointment</h1>
        <p>Schedule your medical appointment quickly and securely. Our team will guide you every step of the way.</p>
      </section>

      <section className="appointments-form-section">
        <form className="appointments-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
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

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
          />

          <label>Service</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            {Object.keys(services).map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>

          {formData.service && (
            <>
              <label>Subservice</label>
              <select
                name="subservice"
                value={formData.subservice}
                onChange={handleChange}
                required
              >
                <option value="">Select Subservice</option>
                {services[formData.service].map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </>
          )}

          <label>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any additional details..."
            rows="4"
          />

          <button type="submit" className="btn whatsapp-btn">
            Book via WhatsApp
          </button>
        </form>
      </section>
       {/* FAQ / Policies */}
      <section className="appointments-faq">
        <h2>FAQs & Policies</h2>
        <ul>
          <li>Appointments are confirmed within 1 hour via WhatsApp.</li>
          <li>You can reschedule or cancel up to 4 hours before the appointment.</li>
          <li>Ensure your contact information is correct for confirmation.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="appointments-testimonials">
        <h2>What Patients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={Profile} alt="Patient Photo" className="patient-avatar"/>
            <p>"Quick and professional. Loved the TeleCare experience!"</p>
            <span>- Jane D.</span>
          </div>
          <div className="testimonial-card">
            <img src={Profile} alt="Patient Photo" className="patient-avatar"/>
            <p>"Medication delivered safely via ePharmacy. Highly recommend."</p>
            <span>- Michael K.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
