import React from "react";
import { Link } from "react-router-dom";
import "./GlobalCare.css";
import heroImage from "../assets/services/globalcare.jpg"; // update with your image
import TravelImg from "../assets/services/medical-travel.jpg";
import SpecialistImg from "../assets/services/medical-specialist.jpg";
import RecordsImg from "../assets/services/record-transfer.jpg";

export default function GlobalCare() {
  return (
    <div className="globalcare-container">

      {/* HERO */}
      <section className="globalcare-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>GlobalCare Medical Access</h1>
            <p>
              Connecting you to world-class specialists, international hospitals,
              and cross-border healthcare support from Africa to the world.
            </p>
            <a href="/appointments" className="btn primary-btn">Request GlobalCare</a>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="globalcare-services">
        <h2>What We Provide</h2>
        <div className="service-cards">

          <div className="service-card">
            <img src={SpecialistImg} alt="Global Specialists" />
            <h3>International Specialists</h3>
            <p>Virtual and referral access to specialists in India, Turkey, UAE, Europe & USA.</p>
            <Link to="/appointments" className="link-btn">Find Specialist</Link>
          </div>

          <div className="service-card">
            <img src={TravelImg} alt="Medical Travel" />
            <h3>Medical Travel & Support</h3>
            <p>Visa letters, hospital coordination, treatment planning & post-travel follow-up.</p>
            <Link to="/appointments" className="link-btn">Start Travel Plan</Link>
          </div>

          <div className="service-card">
            <img src={RecordsImg} alt="Medical Records Transfer" />
            <h3>Cross-Border Medical Records</h3>
            <p>Secure document transfer, second opinions & remote care continuity.</p>
            <Link to="/appointments" className="link-btn">Transfer Records</Link>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="globalcare-steps">
        <h2>How GlobalCare Works</h2>
        <div className="step-cards">
          <div className="step-card">
            <span>1</span>
            <h3>Submit Request</h3>
            <p>Choose a country, specialist, or travel assistance option.</p>
          </div>
          <div className="step-card">
            <span>2</span>
            <h3>Medical Review</h3>
            <p>Your case is reviewed by partner hospitals or global medical teams.</p>
          </div>
          <div className="step-card">
            <span>3</span>
            <h3>Treatment Plan</h3>
            <p>Receive hospital options, estimated costs, visas & referral guidance.</p>
          </div>
          <div className="step-card">
            <span>4</span>
            <h3>Care & Travel Support</h3>
            <p>We help with travel arrangements, communication & ongoing follow-up.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="globalcare-cta">
         <div className="cta-image">
              <img src={heroImage} alt="HomeCare" />
            </div>
        <h2>Ready for Global Medical Access?</h2>
        <p>Let us connect you to healthcare beyond borders — safely and professionally.</p>
        <a href="/appointments" className="btn primary-btn">Get Started</a>
      </section>

    </div>
  );
}
