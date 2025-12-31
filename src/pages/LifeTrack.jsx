import React from "react";
import { Link } from "react-router-dom";
import "./LifeTrack.css";

import heroImage from "../assets/services/lifetrack.jpg"; // replace with your image
import MonitorImg from "../assets/services/monitor.jpg";
import ReminderImg from "../assets/services/reminder.jpg";
import ProgressImg from "../assets/services/progress.jpg";

export default function LifeTrack() {
  return (
    <div className="lifetrack-container">

      {/* HERO SECTION */}
      <section
        className="lifetrack-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>LifeTrack Health Monitoring</h1>
            <p>Track symptoms, medications, vitals, and recovery from home with medical support.</p>
            <a href="/appointments" className="btn primary-btn">Start LifeTrack</a>
          </div>
        </div>
      </section>
      

      {/* SERVICES / FEATURES */}
      <section className="lifetrack-features">
        <h2>What LifeTrack Helps You With</h2>
        <div className="service-cards">

          <div className="service-card">
            <img src={MonitorImg} alt="Vitals Monitoring"/>
            <h3>Vitals Monitoring</h3>
            <p>Track daily blood pressure, glucose, heart rate, symptoms & mood changes.</p>
          </div>

          <div className="service-card">
            <img src={ReminderImg} alt="Medication Reminders"/>
            <h3>Medication Reminders</h3>
            <p>Never forget medication time — automatic alerts and refill reminders.</p>
          </div>

          <div className="service-card">
            <img src={ProgressImg} alt="Progress Reporting"/>
            <h3>Progress Reporting</h3>
            <p>Download health reports and share progress with your doctor for better treatment.</p>
          </div>

        </div>
      </section>


      {/* HOW LIFE TRACK WORKS */}
      <section className="lifetrack-steps">
        <h2>How LifeTrack Works</h2>
        <div className="steps-cards">
          
          <Link to="/appointments" className="step-link">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Register Your Condition</h3>
              <p>Create a profile and select what you want to track (BP, diabetes, post-surgery, etc.).</p>
            </div>
          </Link>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Daily Updates</h3>
            <p>Submit daily vitals or symptoms — our system organizes your progress.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Receive Support</h3>
            <p>Doctors review your tracking data and provide medical guidance when needed.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Improved Outcomes</h3>
            <p>Better control, fewer hospital visits, and early detection of warning signs.</p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="lifetrack-cta">
        <div className="cta-content">
              <div className="cta-image">
                <img src={heroImage} alt="LifeTrack" />
              </div>
          <div className="cta-text">
            <h2>Ready to Take Control of Your Health?</h2>
            <p>Your health journey matters — let's track it together.</p>
            <a href="/appointments" className="btn primary-btn">Start LifeTrack</a>
          </div>
        </div>
      </section>

    </div>
  );
}
