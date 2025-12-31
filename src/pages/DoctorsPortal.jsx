import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./DoctorsPortal.css";

export default function DoctorDashboard() {
  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  // Load doctor from localStorage
  useEffect(() => {
    const storedDoctor = JSON.parse(localStorage.getItem("doctor"));
    if (!storedDoctor) return navigate("/doctor-login");

    setDoctor(storedDoctor);
    fetchPatients(storedDoctor.id);
  }, [navigate]);

  // Fetch patients with assigned CHW info
  const fetchPatients = async (doctorId) => {
    const { data, error } = await supabase
      .from("patients")
      .select(`
        *,
        assigned_chw (id, name, phone)
      `)
      .eq("assigned_doctor", doctorId)
      .order("created_at", { ascending: false });

    if (error) console.log(error);
    setPatients(data || []);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("doctor");
    navigate("/doctor-login");
  };

  // WhatsApp chat
  const chatWithPatient = (phone, name) => {
    if (!phone) return;
    const message = `Hello ${name}, this is Dr. ${doctor.name}, I am glad to assist you.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const chatWithChw = (chwPhone, chwName, patientName) => {
    if (!chwPhone) return;
    const message = `Hello ${chwName}, this is Dr. ${doctor.name}, regarding your assigned patient ${patientName}.`;
    window.open(`https://wa.me/${chwPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="doctor-dashboard">
      <h2>👨‍⚕️ Welcome, Dr. {doctor?.name}</h2>
      <p><strong>Medical No:</strong> {doctor?.medical_no}</p>

      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
        Logout
      </button>

      <h3>Assigned Patients</h3>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Requested Service</th>
            <th>Assigned CHW</th>
            <th>CHW Phone</th>
            <th>Chat Patient</th>
            <th>Chat CHW</th>
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
                <td>{p.assigned_chw?.name ?? "-"}</td>
                <td>{p.assigned_chw?.phone ?? "-"}</td>
                <td>
                  {p.phone && (
                    <a
                      href={`https://wa.me/${p.phone}?text=Hello ${p.full_name}, this is Dr. ${doctor.name}, I am glad to assist you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Chat
                    </a>
                  )}
                </td>
                <td>
                  {p.assigned_chw?.phone && (
                    <a
                      href={`https://wa.me/${p.assigned_chw.phone}?text=Hello ${p.assigned_chw.name}, this is Dr. ${doctor.name}, regarding your assigned patient ${p.full_name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Chat
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
