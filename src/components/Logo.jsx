import React from "react";
import "./Logo.css";

export default function Logo({ width = 450, height = 60 }) {
  return (
    <div className="logo-container">
      <svg
        width={width}
        height={height}
        viewBox="0 0 500 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="40" fontSize="28">
          {/* Opening tag < */}
          <tspan className="logo-icon">&lt;</tspan>
          
          {/* "Inganji" in blue */}
          <tspan className="logo-name-blue">Inganji </tspan>
          
          {/* "Coding Academy" in black */}
          <tspan className="logo-name-black">Coding Academy</tspan>
          
          {/* Closing tag /> */}
          <tspan className="logo-icon-close">/&gt;</tspan>
        </text>

        {/* Optional Tagline */}
        <text x="0" y="70" fontSize="16" className="logo-tagline">
          Learn. Build. Earn.
        </text>
      </svg>
    </div>
  );
}
