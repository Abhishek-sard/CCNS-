import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "NDIS Services", path: "/ndis" },
    { name: "Staffing Solution", path: "/Staffing" },
    { name: "Careers", path: "/job" },
    { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Current Vaccancy", path: "/currentvaccancy" },
  ];

  return (
    <footer className="bg-[#0D2F3F] text-white pt-8 pb-4 relative">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Column 1 – Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3 relative">
            Quick Links
            <span className="block w-10 h-[2px] bg-teal-400 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className="hover:text-teal-300 transition-all flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 – Contact */}
        <div>
          <h3 className="text-md font-semibold mb-3 relative">
            Contact Us
            <span className="block w-10 h-[2px] bg-blue-400 mt-1"></span>
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="bg-teal-500 p-1.5 rounded-lg">
                <FaPhone className="text-xs" />
              </div>
              <p>0433 525 858</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-1.5 rounded-lg">
                <FaEnvelope className="text-xs" />
              </div>
              <p>agency@ccnacare.com.au</p>
              
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-1.5 rounded-lg">
                <FaEnvelope className="text-xs" />
              </div>
              <p>ndis@ccnacare.com.au</p>
              
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-500 p-1.5 rounded-lg mt-0.5">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <p className="text-xs">
                17 Larkham St<br />
                Oran Park NSW 2570
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-500 p-1.5 rounded-lg mt-0.5">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <p className="text-xs">
                21 Grevillea Rd<br />
                Katherine East NT 0850<br />
                Phone: 0423 538 676
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 – Certifications & Socials */}
        <div>
          <h3 className="text-md font-semibold mb-3 relative">
            NDIS Registered Provider
            <span className="block w-10 h-[2px] bg-yellow-400 mt-1"></span>
          </h3>

          <p className="inline-block bg-white text-yellow-700 px-3 py-1 rounded-full text-xs font-bold shadow-md mb-4">
            NDIS PROVIDER ID: 4-LD74YXB
          </p>

          <h3 className="text-md font-semibold mb-3 relative">
            Follow Us
            <span className="block w-10 h-[2px] bg-pink-400 mt-1"></span>
          </h3>

          <div className="flex gap-2">
            {[
              { icon: FaFacebookF, color: "bg-blue-600", link: "https://www.facebook.com/CCNASouthAustralia/" },
              { icon: FaTwitter, color: "bg-sky-500", link: "#" },
              { icon: FaLinkedinIn, color: "bg-blue-700", link: "https://www.linkedin.com/in/ccnasa-679912282/" },
              { icon: FaInstagram, color: "bg-pink-600", link: "https://www.instagram.com/creative_career_nursing_agency/" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.color} p-2 rounded-lg hover:scale-105 transition-transform shadow-md`}
              >
                <s.icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 – Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./provider.jpg"
            alt="CCNA Logo"
            className="h-44 w-56 object-contain opacity-95 hover:opacity-100 transition-all rounded-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white border-opacity-20 mt-6 pt-3"></div>

      {/* Bottom */}
      <div className="text-center text-xs text-white/70">
        <p>
          Comprehensive Care Nursing  Pvt Ltd © {new Date().getFullYear()}
        </p>
        <p className="mt-1">
          ABN: 1867 1505 258 | NDIS Provider Registration ID: 4-LD74YXB
        </p>
        <p className="mt-1">
          Powered by{" "}
          <a
            href="https://ramrosoft.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline"
          >
            RamroSoft
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
