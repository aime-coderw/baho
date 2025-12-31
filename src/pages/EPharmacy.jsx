import React from "react";
import { Link } from "react-router-dom";
import "./EPharmacy.css";
import heroImage from "../assets/services/pharmacy.jpg"; // professional hero image
import Profile from "../assets/icons/account.png";
import HeartHealth from "../assets/services/tips.png";

export default function EPharmacy() {
  return (
    <div className="epharmacy-container">
      {/* HERO SECTION */}
      <section
        className="epharmacy-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>e-Pharmacy: Your Prescriptions Delivered</h1>
            <p>Order your medications online and receive them safely at your doorstep.</p>
            <a href="/shop" className="btn primary-btn">Order Your Prescription</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="epharmacy-features">
        <h2>Why Choose Our e-Pharmacy</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Verified Medicines</h3>
            <p>All medications are verified and delivered from certified pharmacies.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Receive your orders quickly and safely, anywhere in Rwanda.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Safe and flexible payment methods for a hassle-free experience.</p>
          </div>
          <div className="feature-card">
            <h3>Prescription Support</h3>
            <p>Upload your prescriptions and we ensure accurate fulfillment.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="epharmacy-steps">
        <h2>How e-Pharmacy Works</h2>
        <div className="steps-cards">
          <Link to="/shop" className="step-link">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Browse Medicines</h3>
            <p>Search for your prescribed medications in our online catalog.</p>
          </div>
          </Link>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Upload Prescription</h3>
            <p>Submit your doctor’s prescription safely through our platform.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Place Your Order</h3>
            <p>Add medicines to your cart and check out with secure payment.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>Receive your medicines at your home with tracking updates.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="epharmacy-cta">
        <div className="cta-content">
         
          <div className="cta-image">
            <img src={heroImage} alt="Online Pharmacy" />
          </div>
           <div className="cta-text">
            <h2>Start Ordering Your Prescribed Medicine</h2>
            <p>Safe, fast, and convenient medicine delivery from certified pharmacies.</p>
            <a href="/shop" className="btn primary-btn">Order Your Prescription</a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="epharmacy-blog">
        <h2>Health & Medication Tips</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={HeartHealth} alt="Blog 1" className="blog-image" />
            <h3>Top 5 Tips for Safe Medication</h3>
            <p>Learn how to store and take your medicines safely at home.</p>
            <a href="/blog" className="blog-button">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
