import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import GetInvolved from "./GetInvolved";
import AdminPanel from "./AdminPanel";
import PatientCare from "./PatientCare";
import About from "./AboutUs";
import Contact from "./Contact";
import ChronicCare from "./pages/ChronicCare";
import GlobalCare from "./pages/GlobalCare";
import Diagnostics from "./pages/Diagnostics";
import EPharmacy from "./pages/EPharmacy";
import LifeTrack from "./pages/LifeTrack";
import AdminLogin from "./AdminLogin";
import TeleCare from "./pages/TeleCare";
import PreventivePrograms from "./pages/PreventivePrograms";
import MentalHealth from "./pages/MentalHealth";
import Appointments from "./pages/Appointments";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomeCare from "./pages/HomeCare";
import DoctorsPortal from "./pages/DoctorsPortal";
import DoctorLogin from "./DoctorLogin";
import RegisterDoctor from "./pages/RegisterDoctor";
import CHWPortal from "./pages/CHWPortal";
import CHWLogin from "./pages/CHWLogin";
import RegisterCHW from "./pages/RegisterCHW";
import RegisterMember from "./pages/RegisterMembers";
import MembersPortal from "./pages/MembersPortal";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import NewPost from "./pages/NewPost";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Admin login handled inside AdminPanel */}
        <Route path="/post" element={<NewPost />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/members" element={<MembersPortal />} />
        <Route path="/register" element={<RegisterMember />} />
        <Route path="/register-chw" element={<RegisterCHW />} />
        <Route path="/chw-login" element={<CHWLogin />} />
        <Route path="/chws-portal" element={<CHWPortal />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctors-portal" element={<DoctorsPortal />} />
        <Route path="/homecare" element={<HomeCare />} />
        <Route path="/appointments" element={<Appointments />} />
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
