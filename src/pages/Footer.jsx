import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-section">
          <h2 className="footer-logo">BAHO</h2>
          <p className="footer-text">
            Delivering accessible, affordable, and compassionate healthcare
            through technology and community-driven support.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/patient-care">Patient Care</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
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

        {/* COLUMN 4 */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@baho.org</p>
          <p>Phone: +250 788 000 000</p>
          <p>Kigali, Rwanda</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BAHO Health. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
