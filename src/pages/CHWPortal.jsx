import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./CHWPortal.css";

export default function CHWPortal() {
  const [chw, setChw] = useState(null);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedChw = JSON.parse(localStorage.getItem("chw"));
    if (!storedChw) return navigate("/chw-login");

    setChw(storedChw);
    fetchPatients(storedChw.id);
  }, [navigate]);

  const fetchPatients = async (chwId) => {
    const { data, error } = await supabase
      .from("patients")
      .select("*, assigned_doctor(name, phone)")
      .eq("assigned_chw", chwId)
      .order("created_at", { ascending: false });

    if (error) console.log(error);
    setPatients(data || []);
  };

  const handleLogout = () => {
    localStorage.removeItem("chw");
    navigate("/chw-login");
  };

  return (
    <div className="chw-portal-container">
      <h2>🚑 Welcome, {chw?.name}</h2>
      <p><strong>CHW ID:</strong> {chw?.chw_no}</p>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>

      <h3>Assigned Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Requested Service</th>
            <th>Assigned Doctor</th>
            <th>Doctor Phone</th>
            <th>Chat Patient</th>
            <th>Chat Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((p) => (
              <tr key={p.id}>
                <td>{p.full_name}</td>
                <td>{p.phone}</td>
                <td>{p.email ?? "-"}</td>
                <td>{p.address ?? "-"}</td>
                <td>{p.requested_service ?? "-"}</td>
                <td>{p.assigned_doctor?.name ?? "-"}</td>
                <td>{p.assigned_doctor?.phone ?? "-"}</td>
                <td>
                  {p.phone && (
                    <a
                      href={`https://wa.me/${p.phone}?text=Hello ${p.full_name}, this is ${chw.name}, your community health worker.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      Start Chat with Patient
                    </a>
                  )}
                </td>
                <td>
                  {p.assigned_doctor?.phone && (
                    <a
                      href={`https://wa.me/${p.assigned_doctor.phone}?text=Hello Dr. ${p.assigned_doctor.name}, regarding your patient ${p.full_name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn doctor-btn"
                    >
                      Start Chat with Doctor
                    </a>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="9">No patients assigned yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
