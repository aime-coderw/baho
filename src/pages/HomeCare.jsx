import React from "react";
import { Link } from "react-router-dom";
import "./HomeCare.css";
import heroImage from "../assets/services/homecare.jpg"; // replace with professional hero image
import NurseImg from "../assets/services/nurse.jpg";
import RehabImg from "../assets/services/rehub.jpg";
import ElderImg from "../assets/services/eldercare.jpg";
import Blog from "../assets/services/homecare.jpg";

export default function HomeCare() {
  return (
    <div className="homecare-container">

      {/* HERO */}
      <section
        className="homecare-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Professional Home Healthcare Services</h1>
            <p>Reliable, compassionate care at your doorstep for patients of all ages.</p>
            <a href="/appointments" className="btn primary-btn">Book HomeCare</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="homecare-services">
        <h2>Our HomeCare Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={NurseImg} alt="Nursing Care"/>
            <h3>Nursing Care</h3>
            <p>Qualified nurses provide medication management, monitoring, and care at home.</p>
          </div>
          <div className="service-card">
            <img src={RehabImg} alt="Rehabilitation"/>
            <h3>Rehabilitation</h3>
            <p>Physical therapy and rehab programs tailored to your needs at home.</p>
          </div>
          <div className="service-card">
            <img src={ElderImg} alt="Elderly Care"/>
            <h3>Elderly Care</h3>
            <p>Personalized support for seniors including daily living assistance and companionship.</p>
          </div>
        </div>
      </section>

    {/* HOW IT WORKS */}
<section className="homecare-steps">
  <h2>How HomeCare Works</h2>
  <div className="steps-cards">
    <Link to="/appointments" className="step-link">
      <div className="step-card">
        <div className="step-number">1</div>
        <h3>Request HomeCare</h3>
        <p>Book a home visit from a qualified nurse or healthcare professional at your convenience.</p>
      </div>
    </Link>

    <div className="step-card">
      <div className="step-number">2</div>
      <h3>Receive Care at Home</h3>
      <p>Our professionals provide medical care, monitoring, and treatment right at your home.</p>
    </div>

    <div className="step-card">
      <div className="step-number">3</div>
      <h3>Monitor & Update</h3>
      <p>Stay informed with daily health updates and reports from your homecare team.</p>
    </div>

    <div className="step-card">
      <div className="step-number">4</div>
      <h3>Follow-Up & Guidance</h3>
      <p>Receive follow-up visits or guidance to manage your health effectively at home.</p>
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="homecare-cta">
  <div className="cta-content">
    <div className="cta-image">
      <img src={heroImage} alt="HomeCare" />
    </div>
    <div className="cta-text">
      <h2>Ready for Professional HomeCare?</h2>
      <p>Book a visit from our qualified healthcare professionals and receive care in the comfort of your home.</p>
      <a href="/appointments" className="btn primary-btn">Book HomeCare</a>
    </div>
  </div>
</section>


    </div>
  );
}