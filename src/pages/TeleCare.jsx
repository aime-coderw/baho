import React from "react";
import "./TeleCare.css";
import telecareHero from "../assets/services/telecare.jpg";
import Acount from "../assets/icons/account.png";
import Profile from "../assets/services/doct.jpg";
import HeartHealth from "../assets/services/heart.png";
import Consultation from "../assets/services/cons.png";
import Prescription from "../assets/services/med.png";
import Followups from "../assets/services/foll.png";
import Consult from "../assets/services/consult.webp";
import { Link } from "react-router-dom";
import { FaUser, FaVideo, FaLaptopMedical, FaPrescription, FaSyncAlt } from "react-icons/fa";


export default function TeleCare() {
  return (
    <div className="telecare-container">

      {/* HERO */}
      <section className="telecare-hero" style={{ backgroundImage: `url(${telecareHero})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>TeleCare: Your Virtual Healthcare Solution</h1>
            <p>Book video consultations, chat with verified doctors, and manage prescriptions online — from anywhere.</p>
            <a href="/appointments" className="btn primary-btn">Book a TeleCare Appointment</a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="telecare-overview">
        <h2>What is TeleCare?</h2>
        <p>
          TeleCare allows patients to connect with licensed medical professionals via secure video consultations.  
          Receive medical advice, follow-ups, and prescriptions without leaving your home.
        </p>
      </section>

      {/* FEATURES */}
      <section className="telecare-features">
        <h2>Key Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src={Consultation} alt="Heart Health" />
            <h3>Video Consultations</h3>
            <p>Meet specialists virtually and discuss your health concerns in real-time.</p>
          </div>
          <div className="feature-card">
            <img src={Profile} alt="Medical Profile" />
            <h3>Verified Doctors</h3>
            <p>All doctors are verified and licensed to provide safe, reliable care.</p>
          </div>
          <div className="feature-card">
            <img src={Prescription} alt="Prescription" />
            <h3>Online Prescriptions</h3>
            <p>Receive prescriptions digitally and have your medications delivered to your home.</p>
          </div>
          <div className="feature-card">
            <img src={Followups} alt="Follow-ups" />
            <h3>Follow-ups & Tracking</h3>
            <p>Track your health, schedule follow-ups, and manage chronic conditions easily.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
     <section className="telecare-steps">
  <h2>How TeleCare Works</h2>
  <div className="steps-cards">
    <Link to="/appointments" className="step-link">
      <div className="step-card">
        <div className="step-number">1</div>
       
        <h3>Create Your Profile</h3>
        <p>Sign up and complete your health profile to get personalized care.</p>
      </div>
    </Link>

    <div className="step-card">
      <div className="step-number">2</div>

      <h3>Book a Consultation</h3>
      <p>Schedule a video consultation with a verified specialist at your convenience.</p>
    </div>

    <div className="step-card">
      <div className="step-number">3</div>
  
      <h3>Attend Online</h3>
      <p>Meet your doctor securely via our TeleCare platform from anywhere.</p>
    </div>

    <div className="step-card">
      <div className="step-number">4</div>

      <h3>Receive Prescriptions</h3>
      <p>Get prescriptions or medical advice digitally and have medications delivered.</p>
    </div>

    <div className="step-card">
      <div className="step-number">5</div>

      <h3>Follow-Up</h3>
      <p>Schedule follow-ups or repeat consultations for ongoing care.</p>
    </div>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="telecare-testimonies">
        <h2>What Our Patients Say</h2>
        <div className="testimony-cards">
          <div className="testimony-card">
            <img src={Acount} alt="Patient Photo" className="patient-avatar"/>
            <p>"TeleCare saved me a trip to the clinic. The doctor was very professional!"</p>
            <h4>– Aline M.</h4>
          </div>
          <div className="testimony-card">
            <img src={Acount} alt="Patient Photo" className="patient-avatar"/>
            <p>"Easy to use, quick response, and I got my prescription delivered home."</p>
            <h4>– Jean P.</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
     <section className="telecare-cta">
  <div className="cta-content">
    
    <div className="cta-image">
      <img src={Consult} alt="TeleCare Consultation" />
    </div>
    <div className="cta-text">
      <h2>Ready to start your TeleCare consultation?</h2>
      <p>Connect with certified specialists from the comfort of your home and get professional guidance.</p>
      <a href="/appointments" className="btn primary-btn">Book Your Appointment Now</a>
    </div>
  </div>
</section>

    </div>
  );
}
