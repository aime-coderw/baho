import React, { useEffect, useState, useRef } from "react";
import { FaUserInjured, FaProjectDiagram, FaGlobeAmericas, FaUserMd } from "react-icons/fa";
import "./Home.css";
import heroImage from "../assets/services/telecare.jpg"; // Replace with professional hero image

// Service Images
import telecareImg from "../assets/services/telecare.jpg";
import pharmacyImg from "../assets/services/pharmacy.jpg";
import diagnosticsImg from "../assets/services/diagnostics.jpg";
import chroniccareImg from "../assets/services/chroniccare.jpg";
import lifetrackImg from "../assets/services/lifetrack.jpg";
import mentalImg from "../assets/services/mental.jpg";
import preventiveImg from "../assets/services/preventive.jpg";
import globalcareImg from "../assets/services/globalcare.jpg";
import chatIcon from "../assets/chat-icon.jpg";
import PrivacyPic from "../assets/icons/lock.png";
import Doctors from "../assets/icons/medical-assistance.png";
import Security from "../assets/icons/security.png";
import Feedback from "../assets/icons/feedback.png";
import Profile from "../assets/icons/account.png";
import HeartHealth from "../assets/services/heart.png";
import TeleCare from "./TeleCare";
import MentalHealth from "./MentalHealth";
import HomeCare from "../assets/services/homecare.jpg";

export default function Home() {
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [specialists, setSpecialists] = useState(0);
  const impactRef = useRef(null);

  const [chatOpen, setChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([{ sender: "bot", text: "👋 Hello! How can I help you today?" }]);
  const chatEndRef = useRef(null);

  const predefinedReplies = {
    contact: "📞 Phone: +250 791 231 993\n✉️ Email: contact@baho.com\n📍 Kigali, Rwanda",
    services: "We provide TeleCare, e-Pharmacy, Diagnostics, ChronicCare, LifeTrack, Mental Health, Preventive Programs, and GlobalCare.",
    telecare: "TeleCare allows video consultations and online appointments with our specialists.",
    pharmacy: "Order prescriptions online and receive them at home.",
    "mental health": "Tele-counseling and therapy for stress and mental wellbeing."
  };

  const sendMessage = async (customMessage) => {
    const msg = customMessage || userMessage;
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { sender: "user", text: msg }]);
    setUserMessage("");

    const key = msg.toLowerCase().trim();
    if (predefinedReplies[key]) {
      setMessages(prev => [...prev, { sender: "bot", text: predefinedReplies[key] }]);
      return;
    }

    setMessages(prev => [...prev, { sender: "bot", text: "Typing..." }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) throw new Error("Network");

      const data = await res.json();
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: "bot", text: data.reply };
        return updated;
      });

    } catch (err) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: "bot", text: "⚠️ Server is unreachable. Please try again later." };
        return updated;
      });
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, chatOpen]);

  // Animate counters
  useEffect(() => {
    let observer;
    const animateValue = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) { start = target; clearInterval(interval); }
        setter(Math.floor(start));
      }, 50);
    };

    if (impactRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animateValue(5000, setPatientCount);
          animateValue(298, setProjects);
          animateValue(56, setCountries);
          animateValue(465, setSpecialists);
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      observer.observe(impactRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Trusted Telemedicine Across Africa</h1>
            <p>Book consultations, manage prescriptions, and access mental health support — anytime, anywhere.</p>
            <div className="hero-buttons">
              <a href="/appointments" className="btn primary-btn">Book Appointment</a>
             
  <a href="/members" className="btn secondary-btn">Join Our Community</a>


            </div>
          </div>
        </div>
      </section>
      {/* TRUST & SECURITY SECTION */}
<section className="trust">
  <h2>Trusted & Secure Healthcare</h2>
  <p>Your health and privacy are our top priority. BAHO is fully compliant with medical regulations and ensures secure handling of patient data.</p>

  <div className="trust-icons">
    <div className="trust-card">
      <img src={PrivacyPic} alt="Secure Data"/>
      <p>HIPAA & GDPR Compliant</p>
    </div>
    <div className="trust-card">
      <img src={Doctors} alt="Verified Doctors"/>
      <p>Verified Medical Professionals</p>
    </div>
    <div className="trust-card">
      <img src={Security} alt="SSL Secured"/>
      <p>Secure & Encrypted Platform</p>
    </div>
    <div className="trust-card">
      <img src={Feedback} alt="Patient Feedback"/>
      <p>Positive Patient Feedback</p>
    </div>
  </div>
</section>


      {/* IMPACT */}
      <section className="impact" ref={impactRef}>
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-card"><FaUserInjured /> <h3>{patientCount.toLocaleString()}+</h3><p>Patients served</p></div>
          <div className="impact-card"><FaProjectDiagram /> <h3>{projects}</h3><p>Telemedicine Projects</p></div>
          <div className="impact-card"><FaGlobeAmericas /> <h3>{countries}</h3><p>Countries reached</p></div>
          <div className="impact-card"><FaUserMd /> <h3>{specialists}</h3><p>Specialists in network</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {[ 
            {img: telecareImg, title: "TeleCare", desc: "Video consultations and online appointments.", link: "/telecare"},
            {img: pharmacyImg, title: "e-Pharmacy", desc: "Order prescriptions and chronic medication packs.", link: "/pharmacy"},
            {img: diagnosticsImg, title: "Diagnostics", desc: "Screening, lab tests, and preventive checkups.", link: "/diagnostics"},
            {img: chroniccareImg, title: "ChronicCare", desc: "Manage chronic diseases with specialist support.", link: "/chroniccare"},
            {img: lifetrackImg, title: "LifeTrack", desc: "Maternal & child health monitoring.", link: "/lifetrack"},
            {img: mentalImg, title: "Mental Health", desc: "Tele-counseling and therapy services.", link: "/mental"},
            {img: preventiveImg, title: "Preventive Programs", desc: "Fitness, nutrition & lifestyle coaching.", link: "/preventive"},
            {img: globalcareImg, title: "GlobalCare", desc: "Medical tourism and international referrals.", link: "/globalcare"},
            {img: HomeCare, title: "HomeCare", desc: "Receive medical support and diagnosis at your home.", link: "/homecare"},
          ].map((service, i) => (
            <div key={i} className="service-card">
              <img src={service.img} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="service-button">Request the Service</a>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonies">
  <h2>What Our Patients Say</h2>
  <p className="subheading">Real feedback from people who trusted BAHO for their healthcare.</p>

  <div className="testimony-cards">
    <div className="testimony-card">
      <img src={Profile} alt="Patient Photo" className="patient-avatar"/>
      <p className="feedback">"BAHO made my telemedicine experience so easy and professional. Highly recommended!"</p>
      <h4 className="patient-name">– Aline M.</h4>
      <div className="rating">
        <span>★ ★ ★ ★ ★</span>
      </div>
    </div>

    <div className="testimony-card">
      <img src={Profile} alt="Patient Photo" className="patient-avatar"/>
      <p className="feedback">"Quick, reliable, and professional healthcare. I feel safe using BAHO’s platform."</p>
      <h4 className="patient-name">– Jean P.</h4>
      <div className="rating">
        <span>★ ★ ★ ★ ★</span>
      </div>
    </div>

    <div className="testimony-card">
      <img src={Profile} alt="Patient Photo" className="patient-avatar"/>
      <p className="feedback">"The doctors are knowledgeable and the platform is very user-friendly."</p>
      <h4 className="patient-name">– Sarah K.</h4>
      <div className="rating">
        <span>★ ★ ★ ★ ★</span>
      </div>
    </div>
  </div>
</section>
<section className="blog">
  <h2>Latest from Our Blog</h2>
  <p className="subheading">Stay updated with health tips, medical news, and wellness insights.</p>

  <div className="blog-cards">
    <div className="blog-card">
      <img src={HeartHealth} alt="Blog 1" className="blog-image"/>
      <h3>5 Ways to Improve Your Heart Health</h3>
      <p>Learn simple lifestyle changes to keep your heart strong and healthy.</p>
      <a href="/blog" className="blog-button">Read More</a>
    </div>

    <div className="blog-card">
      <img src={telecareImg} alt="Blog 2" className="blog-image"/>
      <h3>Understanding Telemedicine</h3>
      <p>How online consultations are changing healthcare delivery in Africa.</p>
      <a href="/blog" className="blog-button">Read More</a>
    </div>

    <div className="blog-card">
      <img src={mentalImg} alt="Blog 3" className="blog-image"/>
      <h3>Mental Health Tips During Stressful Times</h3>
      <p>Practical ways to maintain your mental well-being every day.</p>
      <a href="/blog" className="blog-button">Read More</a>
    </div>
  </div>

  <div className="blog-cta">
    <a href="/blog" className="btn primary-btn">See All Articles</a>
  </div>
</section>

<div className="chatbot-container">
  {/* Floating chat button */}
  <div className="chatbot-button-wrapper" onClick={() => setChatOpen(true)}>
    <img src={chatIcon} alt="Chat" className="chatbot-icon" />
  </div>

  {/* Chat window */}
  <div className={`chatbot-window ${chatOpen ? "open" : ""}`}>
    <div className="chatbot-header">
      <span>BAHO Assistant</span>
      <button className="chatbot-close-btn" onClick={() => setChatOpen(false)}>×</button>
    </div>

    {/* Messages */}
    <div className="chatbot-messages">
      {messages.map((m, i) => (
        <div key={i} className={`chatbot-msg ${m.sender}`}>
          {m.sender === "bot"
            ? m.text.split(/\*|\n/).map((line, idx) => <p key={idx}>{line.trim()}</p>)
            : m.text
          }
        </div>
      ))}
      <div ref={chatEndRef}></div>
    </div>

    {/* Quick buttons */}
    <div className="chatbot-quick-buttons">
      {["Services", "Contact", "TeleCare", "Mental Health"].map(btn => (
        <button key={btn} onClick={() => sendMessage(btn)}>{btn}</button>
      ))}
    </div>

    {/* Input */}
   {/* Input */}
<form 
  className="chatbot-input"
  onSubmit={(e) => {
    e.preventDefault();
    sendMessage();
  }}
>
  <input
    type="text"
    placeholder="Type your message..."
    value={userMessage}
    onChange={e => setUserMessage(e.target.value)}
  />
  <button type="submit">Send</button>
</form>

    </div>
  </div>
</div>
  
  );
}