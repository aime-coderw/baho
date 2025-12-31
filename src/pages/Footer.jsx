import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 - BRAND */}
        <div className="footer-section">
          <h2 className="footer-logo">BAHO</h2>
          <p className="footer-text">
            Delivering accessible, affordable, and compassionate healthcare
            through technology and community-driven support.
          </p>

          <div className="footer-social">
  <a href="#" aria-label="https://www.facebook.com/profile.php?id=61585796972403"><i className="fab fa-facebook"></i></a>
  <a href="https://x.com/BAHO_e_health24" aria-label="X (Twitter)"><i className="fab fa-x-twitter"></i></a>
  <a href="https://www.instagram.com/baho_e_health_telemedicine24/?utm_source=qr&igsh=bGxhamI5MndobHcy" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
  <a href="https://www.linkedin.com/in/baho-e-health-platform-telemedicine-b768b43a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
  <a href="tiktok.com/@bahoe_health" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
  <a href="https://youtube.com/@classiclifetoo?si=G-UmPFdVFYhBZrci" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
</div>

        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors-portal">Doctors Portal</Link></li>
            <li><Link to="/chws-portal">CHWs Portal</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 - SERVICES */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/telecare">TeleCare</Link></li>
            <li><Link to="/pharmacy">e-Pharmacy</Link></li>
            <li><Link to="/diagnostics">Diagnostics</Link></li>
            <li><Link to="/mental">Mental Health</Link></li>
            <li><Link to="/chroniccare">ChronicCare</Link></li>
            <li><Link to="/globalcare">GlobalCare</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><a href="mailto:support@baho.org">support@baho.org</a></p>
          <p><a href="tel:+250793308820">+250 793 308 820</a></p>
          <p><Link to="/contact">Kigali, Rwanda</Link></p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BAHO Health. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
