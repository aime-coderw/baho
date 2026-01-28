import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/tlog.png";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
     <div className="nav-logo">
  <Link to="/" className="logo-wrap">
    <img src={logo} alt="BAHO Logo" />
    <span className="brand-text">TeleMedAfrica</span>
  </Link>
</div>


      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Center links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><Link to="/">Home</Link></li>

  <li className="dropdown" ref={dropdownRef}>
    <span onClick={() => setServicesOpen(!servicesOpen)} className="mobile-dropdown-toggle">
      Services ▾
    </span>
    <ul className={`dropdown-menu ${servicesOpen ? "open" : ""}`}>
      <li><Link to="/telecare">TeleCare</Link></li>
      <li><Link to="/pharmacy">e-Pharmacy</Link></li>
      <li><Link to="/diagnostics">Diagnostics</Link></li>
      <li><Link to="/chroniccare">ChronicCare</Link></li>
      <li><Link to="/lifetrack">LifeTrack</Link></li>
      <li><Link to="/mental">Mental Health</Link></li>
      <li><Link to="/preventive">Preventive Programs</Link></li>
      <li><Link to="/globalcare">GlobalCare</Link></li>
      <li><Link to="/homecare">HomeCare</Link></li>
    </ul>
  </li>

  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>

  {/* 📱 Visible on mobile */}
  <li className="portal-mobile">
    <Link to="/doctors-portal" className="btn portal-btn">Doctors Portal</Link>
  </li>
  <li className="portal-mobile">
    <Link to="/chws-portal" className="btn portal-btn">CHWs Portal</Link>
  </li>
</ul>

{/* 💻 Desktop Only */}
<div className="portal-buttons desktop-only">
  <Link to="/doctors-portal" className="portal-btn">Doctors Portal</Link>
  <Link to="/chws-portal" className="portal-btn">CHWs Portal</Link>
</div>

    </nav>
  );
}
