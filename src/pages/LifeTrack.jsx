import React from "react";
import "./ServiceDetail.css";

export default function LifeTrack() {
  return (
    <div className="service-detail">
      <h1>LifeTrack</h1>
      <p>
        LifeTrack is a digital health monitoring system that helps patients track 
        their vital signs, medication schedules, and overall progress.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Daily health monitoring</li>
        <li>AI-based alerts for unusual symptoms</li>
        <li>Medication reminders</li>
        <li>Secure communication with clinicians</li>
      </ul>

      <h2>Purpose</h2>
      <p>
        To detect health issues early and ensure ongoing support for vulnerable 
        patients.
      </p>
    </div>
  );
}
