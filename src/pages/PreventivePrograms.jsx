import React from "react";
import { Link } from "react-router-dom";
import "./PreventivePrograms.css"; // update your CSS path
import heroImage from "../assets/services/preventive.jpg"; // update your image path

const PreventivePrograms = () => {
  return (
    <div className="preventive-page">

      {/* HERO SECTION */}
      <section
             className="lifetrack-hero"
             style={{ backgroundImage: `url(${heroImage})` }}
           >
             <div className="hero-overlay">
               <div className="hero-text">
                 <h1>Preventive Health Programs</h1>
                 <p>Stay ahead of diseases with early assessments, vaccination schedules, lifestyle coaching, and medical check-ups designed to protect your long-term health.</p>
                 <a href="/appointments" className="btn primary-btn">Enroll in a Program</a>
               </div>
             </div>
           </section>

      {/* PROGRAM CATEGORIES */}
      <section className="preventive-categories">
        <h2>Our Preventive Care Programs</h2>
        <div className="category-grid">

          <div className="category-card">
            <h3>Annual Medical Check-Up</h3>
            <p>Comprehensive yearly health examination to detect conditions before they develop.</p>
            <Link to="/appointments" className="link-btn">Schedule Check-Up</Link>
          </div>

          <div className="category-card">
            <h3>Vaccination & Immunization</h3>
            <p>Stay updated with required and recommended vaccines for adults, children, and seniors.</p>
            <Link to="/appointments" className="link-btn">Book Immunization</Link>
          </div>

          <div className="category-card">
            <h3>Lifestyle & Nutrition Counseling</h3>
            <p>Build habits that reduce risk of diabetes, hypertension, heart disease, and obesity.</p>
            <Link to="/appointments" className="link-btn">Start Counseling</Link>
          </div>

          <div className="category-card">
            <h3>Cancer Screening Programs</h3>
            <p>Breast, cervical, prostate, and colon cancer screening for early detection and prevention.</p>
            <Link to="/appointments" className="link-btn">Early Screening</Link>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="preventive-steps">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-card">
            <span>1</span>
            <h3>Book a Consultation</h3>
            <p>Choose a preventive program and schedule an online or in-person appointment.</p>
          </div>
          <div className="step-card">
            <span>2</span>
            <h3>Assessment & Screening</h3>
            <p>Receive professional screening, clinical examination, or risk evaluation.</p>
          </div>
          <div className="step-card">
            <span>3</span>
            <h3>Personalized Health Plan</h3>
            <p>Get a care plan designed by healthcare professionals to prevent future complications.</p>
          </div>
          <div className="step-card">
            <span>4</span>
            <h3>Follow-Up & Monitoring</h3>
            <p>Track your progress with scheduled visits, reports, and continued support.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="preventive-cta">
        <h2>Invest in Prevention, Protect Your Future</h2>
        <p>Good health begins with early care. Join a preventive program and take control today.</p>
        <a href="/appointments" className="btn primary-btn">Join a Program</a>
      </section>

    </div>
  );
};

export default PreventivePrograms;
