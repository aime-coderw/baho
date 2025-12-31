import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./CHWLogin.css";
import { Link } from "react-router-dom";

export default function CHWLogin() {
  const [chwNo, setChwNo] = useState("");
  const [passkey, setPasskey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase
      .from("community_health_workers")
      .select("*")
      .eq("chw_no", chwNo)
      .eq("passkey", passkey)
      .single();

    if (error || !data) {
      setErrorMsg("❌ Invalid CHW ID or Passkey");
      return;
    }

    localStorage.setItem("chw", JSON.stringify(data));
    navigate("/chws-portal");
  };

  return (
    <div className="chw-login-container">
      <h2>CHW Portal Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="CHW ID (CHW-XXXX)"
          value={chwNo}
          onChange={(e) => setChwNo(e.target.value)}
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
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {/* Link to register as doctor */}
      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/register-chw" style={{ color: "#007bff", textDecoration: "underline" }}>
          Register as CHW
        </Link>
      </p>
    </div>
  );
}
