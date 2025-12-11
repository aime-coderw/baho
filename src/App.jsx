import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import GetInvolved from "./GetInvolved";
import AdminPanel from "./AdminPanel";
import PatientCare from "./PatientCare";
import About from "./About";
import Contact from "./Contact";
import ChronicCare from "./pages/ChronicCare";
import GlobalCare from "./pages/GlobalCare";
import Diagnostics from "./pages/Diagnostics";
import EPharmacy from "./pages/EPharmacy";
import LifeTrack from "./pages/LifeTrack";
import TeleCare from "./pages/TeleCare";
import PreventivePrograms from "./pages/PreventivePrograms";
import MentalHealth from "./pages/MentalHealth";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Admin login handled inside AdminPanel */}
        <Route path="/mental" element={<MentalHealth />} />
        <Route path="/lifetrack" element={<LifeTrack />} />
        <Route path="/telecare" element={<TeleCare />} />
        <Route path="/pharmacy" element={<EPharmacy />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/globalcare" element={<GlobalCare />} />
        <Route path="/preventive" element={<PreventivePrograms />} />
        <Route path="/chroniccare" element={<ChronicCare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/patient-care" element={<PatientCare />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
