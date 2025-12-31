import React from "react";
import { Link } from "react-router-dom";
import "./Diagnostics.css";
import heroImage from "../assets/services/diagnostics.jpg"; // professional hero image
import LabImg from "../assets/services/imaging.jpg"; // example image
import Profile from "../assets/services/test.jpg";
import Preventive from "../assets/services/prev.jpg";
import HeartHealth from "../assets/services/heart.png";
import Blog from "../assets/services/labtest.jpg";

export default function Diagnostics() {
  return (
    <div className="diagnostics-container">

      {/* HERO SECTION */}
      <section
        className="diagnostics-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Advanced Diagnostic Services</h1>
            <p>Accurate tests, reliable results, and timely reports to guide your healthcare decisions.</p>
            <a href="/appointments" className="btn primary-btn">Book a Test</a>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC SERVICES */}
      <section className="diagnostics-services">
        <h2>Our Diagnostic Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={heroImage} alt="Blood Tests"/>
            <h3>Blood Tests</h3>
            <p>Complete blood count, cholesterol, sugar, and other lab tests.</p>
          </div>
          <div className="service-card">
            <img src={LabImg} alt="Imaging"/>
            <h3>Imaging</h3>
            <p>X-ray, ultrasound, MRI, and CT scans for accurate diagnosis.</p>
          </div>
          <div className="service-card">
            <img src={Profile} alt="Specialized Tests"/>
            <h3>Specialized Tests</h3>
            <p>Hormone panels, allergy tests, and genetic screenings.</p>
          </div>
          <div className="service-card">
            <img src={Preventive} alt="Preventive Screening"/>
            <h3>Preventive Screening</h3>
            <p>Regular health screenings for early detection of conditions.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
     <section className="diagnostics-steps">
  <h2>How It Works</h2>
  <div className="steps-cards">
    <Link to="/appointments" className="step-link">
      <div className="step-card">
        <div className="step-number">1</div>
        <h3>Book Your Test</h3>
        <p>Select the diagnostic test you need and schedule an appointment.</p>
      </div>
    </Link>

    <div className="step-card">
      <div className="step-number">2</div>
      <h3>Visit Our Lab</h3>
      <p>Attend the test at our lab or request home sample collection.</p>
    </div>

    <div className="step-card">
      <div className="step-number">3</div>
      <h3>Receive Results</h3>
      <p>Get your results securely online or via email.</p>
    </div>

    <div className="step-card">
      <div className="step-number">4</div>
      <h3>Consult Your Doctor</h3>
      <p>Discuss the results with your doctor to plan treatment if needed.</p>
    </div>
  </div>
</section>


      {/* CTA SECTION */}
      <section className="diagnostics-cta">
        <div className="cta-content">
          
          <div className="cta-image">
            <img src={heroImage} alt="Diagnostics" />
          </div>
          <div className="cta-text">
            <h2>Ready for Accurate Diagnostic Testing?</h2>
            <p>Book your tests online and receive reliable results quickly and safely.</p>
            <a href="/appointments" className="btn primary-btn">Book a Test</a>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="diagnostics-blog">
        <h2>Health Insights & Diagnostic Tips</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={Blog} alt="Blog 1" className="blog-image" />
            <h3>Understanding Common Lab Tests</h3>
            <p>Learn the purpose of common blood tests and what the results mean.</p>
            <a href="/blog" className="blog-button">Read More</a>
          </div>
        </div>
      </section>

    </div>
  );
}
