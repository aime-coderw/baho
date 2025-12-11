import React from "react";
import "./About.css";
import aboutImage from "./assets/logo.jpg"; // Replace with your actual image

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img src={aboutImage} alt="About BAHO" />
        <h1>About BAHO</h1>
      </div>

      <div className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p>
            At BAHO, our mission is to provide accessible, high-quality healthcare to everyone, 
            regardless of location or circumstance. We believe that healthcare is a basic human right.
          </p>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>
            To become a leading healthcare organization in the region, empowering communities 
            through innovative medical solutions, telecare, and preventive programs.
          </p>
        </section>

        <section>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Compassion:</strong> We care deeply for the wellbeing of our patients.</li>
            <li><strong>Integrity:</strong> We uphold honesty and transparency in all our actions.</li>
            <li><strong>Excellence:</strong> We strive for the highest standards in healthcare delivery.</li>
            <li><strong>Innovation:</strong> We adopt modern solutions to improve patient care.</li>
          </ul>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>
            Our team consists of dedicated medical specialists, volunteers, and support staff 
            working together to provide comprehensive healthcare services to our community.
          </p>
        </section>

        <section>
          <h2>Get Involved</h2>
          <p>
            Interested in joining our mission? <a href="/get-involved">Apply here</a> to volunteer 
            or contribute as a medical specialist.
          </p>
        </section>
      </div>
    </div>
  );
}
