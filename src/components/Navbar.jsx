import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/baho.jpeg";

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

  // Close dropdown if click outside (both mobile & desktop)
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
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="BAHO Logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>

        <li
          className="dropdown"
          ref={dropdownRef}
          onMouseEnter={() => !isMobile && setServicesOpen(true)}
          onMouseLeave={() => !isMobile && setServicesOpen(true)} // persist open on hover
        >
          <span onClick={() => setServicesOpen(!servicesOpen)}>
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
          </ul>
        </li>

        <li><Link to="/get-involved">Get Involved</Link></li>
        <li><Link to="/patient-care">Patient Care</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
