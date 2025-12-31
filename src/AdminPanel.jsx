import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  // --- Doctors ---
  const [doctorName, setDoctorName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorSpec, setDoctorSpec] = useState("");
  const [doctors, setDoctors] = useState([]);

  // --- CHWs ---
  const [chwName, setChwName] = useState("");
  const [chwPhone, setChwPhone] = useState("");
  const [chwEmail, setChwEmail] = useState("");
  const [chwRegion, setChwRegion] = useState("");
  const [chws, setChws] = useState([]);

  // --- Patients ---
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [assignedDoctor, setAssignedDoctor] = useState("");
  const [assignedChw, setAssignedChw] = useState("");
  const [requestedService, setRequestedService] = useState("");
  const [patients, setPatients] = useState([]);

  // --- Members ---
  const [memberName, setMemberName] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberCategory, setMemberCategory] = useState(""); // hospital, health_worker, student, volunteer
  const [members, setMembers] = useState([]);

  // --- Auto Generators ---
  const generateMedicalNo = () => `MD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const generateCHWNo = () => `CHW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const generatePasskey = () => `KEY-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  // --- Check Session/Login ---
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/admin-login");
      else setSession(session);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/admin-login");
      else setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  // --- Fetch Lists ---
  const fetchDoctors = async () => {
    const { data } = await supabase.from("doctors").select("*");
    setDoctors(data || []);
  };

  const fetchChws = async () => {
    const { data } = await supabase.from("community_health_workers").select("*");
    setChws(data || []);
  };

  const fetchPatients = async () => {
    const { data } = await supabase
      .from("patients")
      .select("*, assigned_doctor(name), assigned_chw(name)")
      .order("created_at", { ascending: false });
    setPatients(data || []);
  };

  const fetchMembers = async () => {
    const { data } = await supabase
      .from("members")
      .select("*")
      .order("registered_at", { ascending: false });
    setMembers(data || []);
  };

  useEffect(() => {
    if (session) {
      fetchDoctors();
      fetchChws();
      fetchPatients();
      fetchMembers();
    }
  }, [session]);

  // --- Add Doctor ---
  const handleAddDoctor = async (e) => {
    e.preventDefault();
    const medical_no = generateMedicalNo();
    const passkey = generatePasskey();

    const { error } = await supabase.from("doctors").insert([
      { name: doctorName, phone: doctorPhone, email: doctorEmail, specialization: doctorSpec, medical_no, passkey }
    ]);

    if (error) alert(error.message);
    else {
      alert(`✔️ Doctor Registered!\nMed No: ${medical_no}\nPasskey: ${passkey}`);
      setDoctorName(""); setDoctorPhone(""); setDoctorEmail(""); setDoctorSpec("");
      fetchDoctors();
    }
  };

  // --- Add CHW ---
  const handleAddChw = async (e) => {
    e.preventDefault();
    const chw_no = generateCHWNo();
    const passkey = generatePasskey();

    const { error } = await supabase.from("community_health_workers").insert([
      { name: chwName, phone: chwPhone, email: chwEmail, region: chwRegion, chw_no, passkey }
    ]);

    if (error) alert(error.message);
    else {
      alert(`✔️ CHW Registered!\nCHW ID: ${chw_no}\nPasskey: ${passkey}`);
      setChwName(""); setChwPhone(""); setChwEmail(""); setChwRegion("");
      fetchChws();
    }
  };

  // --- Add Patient ---
  const handleAddPatient = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("patients").insert([
      {
        full_name: patientName,
        phone: patientPhone,
        email: patientEmail,
        address: patientAddress,
        requested_service: requestedService || null,
        assigned_doctor: assignedDoctor || null,
        assigned_chw: assignedChw || null,
      }
    ]);

    if (error) alert(error.message);
    else {
      alert("✔️ Patient added!");
      setPatientName(""); setPatientPhone(""); setPatientEmail(""); setPatientAddress("");
      setRequestedService(""); setAssignedDoctor(""); setAssignedChw("");
      fetchPatients();
    }
  };

  // --- Add Member ---
  const handleAddMember = async (e) => {
    e.preventDefault();

    if (!memberName || !memberPhone || !memberCategory) {
      alert("Please fill in all required fields!");
      return;
    }

    const { error } = await supabase.from("members").insert([
      {
        full_name: memberName,
        phone: memberPhone,
        email: memberEmail || null,
        category: memberCategory,
      }
    ]);

    if (error) alert(error.message);
    else {
      alert("✔️ Member Registered!");
      setMemberName(""); setMemberPhone(""); setMemberEmail(""); setMemberCategory("");
      fetchMembers();
    }
  };

  // --- WhatsApp chat ---
  const chatWithPatient = (phone, name) => {
    const message = `Hello ${name}, this is your healthcare provider.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // --- Logout ---
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  if (!session) return <p>Loading...</p>;

  return (
    <div className="admin-panel">
      <h1>🛡️ Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      <a href="/post">Create New Blog Post</a>

      {/* Add Doctor */}
      <section>
        <h2>➕ Register Doctor</h2>
        <form onSubmit={handleAddDoctor}>
          <input type="text" placeholder="Full Name" value={doctorName} onChange={e => setDoctorName(e.target.value)} required />
          <input type="text" placeholder="Phone" value={doctorPhone} onChange={e => setDoctorPhone(e.target.value)} required />
          <input type="text" placeholder="Email" value={doctorEmail} onChange={e => setDoctorEmail(e.target.value)} />
          <input type="text" placeholder="Specialization" value={doctorSpec} onChange={e => setDoctorSpec(e.target.value)} />
          <button type="submit">Add Doctor</button>
        </form>
      </section>

      {/* Add CHW */}
      <section>
        <h2>➕ Register Community Health Worker</h2>
        <form onSubmit={handleAddChw}>
          <input type="text" placeholder="Full Name" value={chwName} onChange={e => setChwName(e.target.value)} required />
          <input type="text" placeholder="Phone" value={chwPhone} onChange={e => setChwPhone(e.target.value)} required />
          <input type="text" placeholder="Email" value={chwEmail} onChange={e => setChwEmail(e.target.value)} />
          <input type="text" placeholder="Region Assigned" value={chwRegion} onChange={e => setChwRegion(e.target.value)} />
          <button type="submit">Add CHW</button>
        </form>
      </section>

      {/* Add Patient */}
      <section>
        <h2>➕ Register Patient</h2>
        <form onSubmit={handleAddPatient}>
          <input type="text" placeholder="Full Name" value={patientName} onChange={e => setPatientName(e.target.value)} required />
          <input type="text" placeholder="Phone" value={patientPhone} onChange={e => setPatientPhone(e.target.value)} required />
          <input type="text" placeholder="Email" value={patientEmail} onChange={e => setPatientEmail(e.target.value)} />
          <input type="text" placeholder="Address" value={patientAddress} onChange={e => setPatientAddress(e.target.value)} />
          <input type="text" placeholder="Requested Service" value={requestedService} onChange={e => setRequestedService(e.target.value)} />
          <select value={assignedDoctor} onChange={e => setAssignedDoctor(e.target.value)}>
            <option value="">Assign Doctor</option>
            {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          <select value={assignedChw} onChange={e => setAssignedChw(e.target.value)}>
            <option value="">Assign CHW</option>
            {chws.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <button type="submit">Add Patient</button>
        </form>
      </section>

      {/* Add Member */}
      <section>
        <h2>➕ Register Member</h2>
        <form onSubmit={handleAddMember}>
          <input type="text" placeholder="Full Name" value={memberName} onChange={e => setMemberName(e.target.value)} required />
          <input type="text" placeholder="Phone" value={memberPhone} onChange={e => setMemberPhone(e.target.value)} required />
          <input type="text" placeholder="Email (optional)" value={memberEmail} onChange={e => setMemberEmail(e.target.value)} />
          <select value={memberCategory} onChange={e => setMemberCategory(e.target.value)} required>
            <option value="">Select Member Type</option>
            <option value="hospital">Hospital</option>
            <option value="health_worker">Health Worker</option>
            <option value="student">Medical Student</option>
            <option value="volunteer">Volunteer</option>
          </select>
          <button type="submit">Add Member</button>
        </form>
      </section>
     
      {/* Doctors Table */}
      <section>
        <h2>👨‍⚕️ Doctors</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Email</th><th>Specialization</th><th>Med No</th><th>Passkey</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(d => (
              <tr key={d.id}>
                <td>{d.name}</td><td>{d.phone}</td><td>{d.email}</td><td>{d.specialization}</td>
                <td>{d.medical_no}</td><td>{d.passkey}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CHWs Table */}
      <section>
        <h2>🚑 Community Health Workers</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Email</th><th>Region</th><th>CHW No</th><th>Passkey</th>
            </tr>
          </thead>
          <tbody>
            {chws.map(c => (
              <tr key={c.id}>
                <td>{c.name}</td><td>{c.phone}</td><td>{c.email}</td><td>{c.region}</td>
                <td>{c.chw_no}</td><td>{c.passkey}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Patients Table */}
      <section>
        <h2>🧍 Patients</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Email</th><th>Address</th>
              <th>Requested Service</th>
              <th>Assigned Doctor</th><th>Assigned CHW</th><th>WhatsApp</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id}>
                <td>{p.full_name}</td><td>{p.phone}</td><td>{p.email}</td><td>{p.address}</td>
                <td>{p.requested_service || "-"}</td>
                <td>{p.assigned_doctor?.name || "-"}</td>
                <td>{p.assigned_chw?.name || "-"}</td>
                <td><button onClick={() => chatWithPatient(p.phone, p.full_name)}>💬 Chat</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
       {/* Members Table */}
      <section>
        <h2>👥 Members</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Email</th><th>Category</th>
            </tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id}>
                <td>{m.full_name}</td>
                <td>{m.phone}</td>
                <td>{m.email || "-"}</td>
                <td>{m.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}
