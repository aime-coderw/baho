import React from "react";
import { Link } from "react-router-dom";
import "./ChronicCare.css";
import heroImage from "../assets/services/chroniccare.jpg"; // replace with professional hero image
import CardioImg from "../assets/services/cardio.jpg";
import DiabetesImg from "../assets/services/diabetes.jpg";
import HypertensionImg from "../assets/services/hypertension.jpg";
import Cancer from "../assets/services/cancer.jpg";

export default function ChronicCare() {
  return (
    <div className="chroniccare-container">

      {/* HERO SECTION */}
      <section
        className="chroniccare-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Comprehensive Chronic Disease Management and Home Care</h1>
            <p>Monitor, manage, and improve your long-term health with expert guidance.</p>
            <a href="/appointments" className="btn primary-btn">Start ChronicCare Today</a>
            
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="chroniccare-services">
        <h2>Our Chronic Care Programs</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={CardioImg} alt="Cardiovascular"/>
            <h3>Cardiovascular Health</h3>
            <p>Regular monitoring and guidance to prevent heart complications.</p>
          </div>
          <div className="service-card">
            <img src={DiabetesImg} alt="Diabetes Management"/>
            <h3>Diabetes Management</h3>
            <p>Track blood sugar, adjust medication, and maintain a healthy lifestyle.</p>
          </div>
          <div className="service-card">
            <img src={HypertensionImg} alt="Hypertension"/>
            <h3>Hypertension Care</h3>
            <p>Monitor blood pressure and manage lifestyle changes effectively.</p>
          </div>
         </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="chroniccare-steps">
        <h2>How ChronicCare Works</h2>
        <div className="steps-cards">
          <Link to="/appointments" className="step-link">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your profile and share your medical history.</p>
            </div>
          </Link>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Personalized Plan</h3>
            <p>Receive a tailored care plan for your chronic condition.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Regular Monitoring</h3>
            <p>Track your progress with regular check-ins and lab tests.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Adjust Care</h3>
            <p>Get medical guidance to modify your treatment as needed.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
        <section className="chroniccare-cta">
  <div className="cta-content">
    <div className="cta-image">
      <img src={heroImage} alt="ChronicCare" />
    </div>
    <div className="cta-text">
      <h2>Take Control of Your Chronic Condition</h2>
      <p>Manage your chronic disease today. Follow doctors' instructions to live healthier and longer.</p>
      <a href="/appointments" className="btn primary-btn">Start ChronicCare Today</a>
    </div>
  </div>
</section>

    </div>
  );
}
