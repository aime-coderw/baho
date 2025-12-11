import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import AdminLogin from "./AdminLogin";

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch applications
  const fetchApplications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert("Error fetching applications: " + error.message);
    } else {
      setApplications(data);
    }
    setLoading(false);
  };

  // Fetch patient requests
  const fetchPatients = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("patient_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert("Error fetching patient requests: " + error.message);
    } else {
      setPatients(data);
    }
    setLoading(false);
  };

  // Fetch all data when admin is logged in
  useEffect(() => {
    if (user) {
      fetchApplications();
      fetchPatients();
    }
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) {
    return <AdminLogin onLogin={setUser} />;
  }

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>

      {loading && <p>Loading data...</p>}

      {/* Applications Table */}
      <h2>Applications (Medical Specialists & Volunteers)</h2>
      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.full_name}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td>{app.role}</td>
              <td>{app.message}</td>
              <td>{new Date(app.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Patient Requests Table */}
      <h2>Patient Requests</h2>
      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.full_name}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.message}</td>
              <td>{new Date(patient.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
