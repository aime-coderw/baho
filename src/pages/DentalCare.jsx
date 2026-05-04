import React from "react";
import { Link } from "react-router-dom";
import "./HomeCare.css";
import heroImage from "../assets/services/dental.jpg";
import CleaningImg from "../assets/services/dentalcleaning.jpg";
import BracesImg from "../assets/services/braces.jpg";
import SurgeryImg from "../assets/services/dentalsurgery.jpg";
import CheckupImg from "../assets/services/checkup.jpg";

export default function DentalCare() {
  return (
    <div className="homecare-container">

      {/* HERO */}
      <section
        className="homecare-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Professional Dental Care Services</h1>
            <p>Healthy smiles start here — expert dental care for all ages.</p>
            <a href="/appointments" className="btn primary-btn">Book Dental Appointment</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="homecare-services">
        <h2>Our Dental Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={CleaningImg} alt="Teeth Cleaning"/>
            <h3>Teeth Cleaning</h3>
            <p>Professional cleaning to remove plaque, prevent cavities, and maintain oral hygiene.</p>
          </div>

          <div className="service-card">
            <img src={BracesImg} alt="Braces & Alignment"/>
            <h3>Braces & Alignment</h3>
            <p>Orthodontic treatments to straighten teeth and improve your smile.</p>
          </div>

          <div className="service-card">
            <img src={SurgeryImg} alt="Dental Surgery"/>
            <h3>Dental Procedures</h3>
            <p>Safe tooth extractions, root canals, and other advanced dental treatments.</p>
          </div>

          <div className="service-card">
            <img src={CheckupImg} alt="Dental Checkup"/>
            <h3>Routine Checkups</h3>
            <p>Regular examinations to detect and prevent dental issues early.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="homecare-steps">
        <h2>How Dental Care Works</h2>
        <div className="steps-cards">

          <Link to="/appointments" className="step-link">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Book Appointment</h3>
              <p>Schedule a visit with our dental specialists at your preferred time.</p>
            </div>
          </Link>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Dental Examination</h3>
            <p>Our dentists assess your oral health and recommend suitable treatments.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Receive Treatment</h3>
            <p>Get professional dental care using modern tools and safe procedures.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Follow-Up Care</h3>
            <p>We guide you on maintaining oral hygiene and schedule follow-ups if needed.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="homecare-cta">
        <div className="cta-content">
          <div className="cta-image">
            <img src={heroImage} alt="Dental Care" />
          </div>
          <div className="cta-text">
            <h2>Ready for a Healthier Smile?</h2>
            <p>Book your dental appointment today and experience professional oral care.</p>
            <a href="/appointments" className="btn primary-btn">Book Dental Care</a>
          </div>
        </div>
      </section>

    </div>
  );
}