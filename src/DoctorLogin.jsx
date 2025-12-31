import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate, Link } from "react-router-dom";

export default function DoctorLogin() {
  const [medNo, setMedNo] = useState("");
  const [passkey, setPasskey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase
      .from("doctors")
      .select("*")
      .eq("medical_no", medNo)
      .eq("passkey", passkey)
      .single();

    if (error || !data) {
      setErrorMsg("❌ Invalid Med No or Passkey");
      return;
    }

    // Save doctor session info
    localStorage.setItem("doctor", JSON.stringify(data));
    navigate("/doctors-portal");
  };

  return (
    <div className="doctor-login" style={{ maxWidth: "400px", margin: "auto", padding: "40px" }}>
      <h2>Doctor Portal Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Medical Number (MED-XXXX)"
          value={medNo}
          onChange={(e) => setMedNo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passkey"
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMsg && <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>}

      {/* Link to register as doctor */}
      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/register-doctor" style={{ color: "#007bff", textDecoration: "underline" }}>
          Register as Doctor
        </Link>
      </p>
    </div>
  );
}
