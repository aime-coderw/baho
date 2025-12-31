import React from "react";
import { Link } from "react-router-dom";
import "./MentalHealth.css";

import heroImage from "../assets/services/mental.jpg"; // Replace with your image
import CounselingImg from "../assets/services/counseling.jpg";
import TherapyImg from "../assets/services/therapy.jpg";
import SupportImg from "../assets/services/support.jpg";

export default function MentalHealth() {
  return (
    <div className="mental-container">

      {/* HERO SECTION */}
      <section
        className="mental-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Mental Health & Psychological Support</h1>
            <p>Confidential care for anxiety, depression, trauma, stress, and emotional wellness.</p>
            <a href="/appointments" className="btn primary-btn">Speak to a Specialist</a>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="mental-services">
        <h2>Our Mental Health Services</h2>
        <div className="service-cards">

          <div className="service-card">
            <img src={CounselingImg} alt="Counseling" />
            <h3>Counseling Sessions</h3>
            <p>Private one-on-one sessions to help you navigate emotional challenges and life events.</p>
          </div>

          <div className="service-card">
            <img src={TherapyImg} alt="Therapy" />
            <h3>Therapy Programs</h3>
            <p>Cognitive Behavioral Therapy (CBT), trauma-focused care, and recovery plans.</p>
          </div>

          <div className="service-card">
            <img src={SupportImg} alt="Support" />
            <h3>Support & Follow-Up</h3>
            <p>Ongoing check-ins, progress monitoring, and mental health improvement tracking.</p>
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="mental-steps">
        <h2>How Support Works</h2>
        <div className="steps-cards">

          <Link to="/appointments" className="step-link">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Book Consultation</h3>
              <p>Schedule a confidential appointment with a licensed mental health practitioner.</p>
            </div>
          </Link>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Assessment & Care Plan</h3>
            <p>We assess symptoms, needs, and create a tailored mental wellness plan.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Therapy & Support</h3>
            <p>Receive therapy, counseling, coping strategies, and follow-up sessions.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Recovery & Wellness</h3>
            <p>Monitor progress, reduce symptoms, and build emotional strength at your pace.</p>
          </div>

        </div>
      </section>


      {/* CTA SECTION */}
      <section className="mental-cta">
        <div className="cta-content">
          <div className="cta-image">
          <img src={heroImage} alt="LifeTrack" />
          </div>
          <h2>You Don't Have to Face It Alone</h2>
          <p>Your mental health matters. We're here to support you with dignity and confidentiality.</p>
          <a href="/appointments" className="btn secondary-btn">Get Mental Health Support</a>
        </div>
      </section>

    </div>
  );
}
