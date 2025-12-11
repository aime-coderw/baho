import React from "react";
import { Facebook, Instagram, Twitter, MessageCircle, Linkedin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/thebaho",
      icon: <Facebook size={32} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/thebaho",
      icon: <Instagram size={32} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thebaho",
      icon: <Twitter size={32} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/250791231993",
      icon: <MessageCircle size={32} />,
    },
     {
      name: "LinkedIn",
      url: "https://linkedin.com/thebaho",
      icon: <Linkedin size={32} />,
    },
  ];

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Reach out to us on our social media platforms. We are happy to answer your questions and provide support.</p>

      <div className="social-handles">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={link.name}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
