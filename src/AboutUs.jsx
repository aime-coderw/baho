import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faEye, faHandHoldingMedical, faLock, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
import aboutHero from "./assets/services/clinic-team.jpg"; // update your image path
import missionImg from "./assets/services/mission.jpg";
import valuesImg from "./assets/services/values.jpg";
import teamImg from "./assets/services/team.jpg";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="overlay">
          <h1>About Us</h1>
          <p>We are committed to accessible, safe, and patient-centered healthcare.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p className="description">
          We are a medical-focused digital care provider offering clinical support, diagnostics,
          chronic care management, pharmacy services, homecare, preventive programs, and global medical access. 
          Our approach connects patients with licensed medical professionals, ensuring safety,
          quality, and continuity of care.
        </p>
      </section>

      {/* OUR MISSION & VISION */}
      <section className="about-grid">
        <div className="grid-card">
          <img src={missionImg} alt="Mission" />
          <h3>Our Mission</h3>
          <p>To deliver reliable, affordable, and high-quality healthcare access wherever patients are.</p>
        </div>

        <div className="grid-card">
          <img src={valuesImg} alt="Vision" />
          <h3>Our Vision</h3>
          <p>A world where digital care and professional healthcare work together to save lives.</p>
        </div>

        <div className="grid-card">
          <img src={teamImg} alt="Team" />
          <h3>Our Team</h3>
          <p>Licensed medical experts, clinicians, pharmacists, and support staff guiding every case responsibly.</p>
        </div>
      </section>

           {/* OUR CORE VALUES */}
     <section className="values-steps">
  <h2>Our Core Values</h2>
  <div className="steps-cards">
    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faShieldAlt} /></div>
      <h3>Patient Safety</h3>
      <p>Ensuring all care processes prioritize the safety and well-being of patients.</p>
    </div>

    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faEye} /></div>
      <h3>Transparency</h3>
      <p>Clear communication in all processes, from treatment plans to billing.</p>
    </div>

    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faHandHoldingMedical} /></div>
      <h3>Medical Ethics</h3>
      <p>Providing care that follows strict professional and ethical standards.</p>
    </div>

    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faLock} /></div>
      <h3>Data Privacy</h3>
      <p>Protecting patient information with confidentiality and compliance.</p>
    </div>

    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faHeart} /></div>
      <h3>Compassionate Care</h3>
      <p>Providing services with empathy, kindness, and respect.</p>
    </div>

    <div className="step-card">
      <div className="step-icon"><FontAwesomeIcon icon={faUsers} /></div>
      <h3>Accessibility</h3>
      <p>Making healthcare reachable and inclusive for all patients.</p>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">
            
            <div className="cta-image">
              <img src={aboutHero} alt="Our Team" />
            </div>
        <h2>We Are Here for You</h2>
        <p>Your health, safety, and well-being come first. Let’s walk your medical journey together.</p>
        <a href="/appointments" className="btn primary-btn">Book an Appointment</a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
