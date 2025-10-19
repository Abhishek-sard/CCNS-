import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import Logo from "../assets/logoccna1.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-8 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Quick Links with Enhanced Styling */}
          <div className="transform hover:translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-blue-400 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "NDIS Services",
                "Staffing Services",
                "Careers",
                "Blog",
                "Contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-white hover:text-blue-200 transition-all duration-300 group text-sm font-medium"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with Icons */}
          <div className="transform hover:translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-green-400 pl-3">
              Contact Us
            </h3>
            <div className="space-y-3">
              {/* Sydney Address */}
              <div className="flex items-center group">
                <div className="bg-blue-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-white text-sm" />
                </div>
                <p className="text-white text-sm font-medium">0421 079 928</p>
              </div>
              <div className="flex items-center group">
                <div className="bg-red-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <p className="text-white text-sm font-medium">
                  info@ccnaagency.com
                </p>
              </div>
              <div className="flex items-start group">
                <div className="bg-purple-500 p-2 rounded-lg mr-3 mt-1 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <p className="text-white text-sm font-medium">
                  Suite 616, level 6<br />
                  368 Sussex St
                  <br />
                  Sydney-NSW-2000
                </p>
              </div>

              {/* Northern Territory Address */}
              <div className="flex items-start group">
                <div className="bg-purple-500 p-2 rounded-lg mr-3 mt-1 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <p className="text-white text-sm font-medium">
                  21 Grevillea Rd
                  <br />
                  Katherine East NT 0850
                  <br />
                  Phone: 0423 538 676
                </p>
              </div>
            </div>
          </div>

          {/* NDIS Provider & Social Links */}
          <div className="transform hover:translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-white border-l-4 border-yellow-400 pl-3">
              NDIS Provider
            </h3>
            <div className="mb-6">
              <span className="inline-block bg-white text-yellow-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Certified Provider
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4 text-white border-l-4 border-pink-400 pl-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/CCNASouthAustralia/",
                  color: "bg-blue-600",
                },
                { icon: FaTwitter, href: "#", color: "bg-sky-500" },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/ccnasa-679912282/",
                  color: "bg-blue-700",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/creative_career_nursing_agency/",
                  color: "bg-pink-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} p-3 rounded-xl text-white hover:scale-110 hover:shadow-lg transition-all duration-300 transform`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Logo with Enhanced Styling */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
              <img
                src={Logo}
                alt="CCNA Agency Logo"
                className="h-[150px] w-[150px] md:h-[180px] md:w-[180px] object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-6"></div>

        {/* Copyright with Heart */}
        <div className="text-center text-white text-sm">
          <div className="flex items-center justify-center gap-2">
            <span>
              Copyright &copy; {new Date().getFullYear()} CCNA Agency. All
              rights reserved. | Powered By{" "}
              <a href="https://novaitsolutionnp.com" target="_blank">
                Nova It Solutions.
              </a>
            </span>
            <HiHeart className="text-red-400 animate-pulse" />
          </div>
          <p className="text-xs text-white text-opacity-70 mt-2">
            Empowering Communities Through Quality Care
          </p>
          <a href="https://ramrosoft.com.au/">Powered by RamroSoft</a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-4 right-8 w-6 h-6 bg-white rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-12 left-1/4 w-3 h-3 bg-white rounded-full opacity-10 animate-bounce delay-300"></div>
    </footer>
  );
};

export default Footer;
