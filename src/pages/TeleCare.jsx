import React from "react";
import "./ServiceDetail.css";

export default function TeleCare() {
  return (
    <div className="service-detail">
      <h1>TeleCare</h1>
      <p>
        TeleCare provides round-the-clock virtual consultations through video, audio, 
        and messaging. Patients can speak to licensed doctors, nurses, and specialists 
        without needing to travel. 
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>24/7 virtual doctor consultations</li>
        <li>Prescription support</li>
        <li>Follow-up and medical advice</li>
        <li>Remote triage during emergencies</li>
      </ul>

      <h2>Why TeleCare?</h2>
      <p>
        It reduces waiting time, eliminates transport costs, and allows patients to 
        receive timely help even in remote areas.
      </p>
    </div>
  );
}
