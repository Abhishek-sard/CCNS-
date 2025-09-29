import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from '../assets/logoccna1.png'

const Footer = () => {
  return (
    <footer className="bg-yellow-600 py-3 text-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">NDIS Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Staffing Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-1 text-sm">📞 Phone: 0421 079 928 </p>
          <p className="mb-1 text-sm">✉️ Email: info@ccnaagency.com</p>
          <p className="text-sm">📍 Office: Suite 616, level 6, 368 Sussex St-Sydney-NSW-2000</p>
        </div>

        {/* NDIS Provider / Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">NDIS Provider</h3>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3 text-white text-lg">
            <a href="https://www.facebook.com/CCNASouthAustralia/" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/ccnasa-679912282/" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/creative_career_nursing_agency/" className="hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Logo}
            alt="NDIS Logo"
            className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] object-contain"
          />
        </div>

      </div>

      <div className="text-center mt-3 text-black text-xs">
        &copy; {new Date().getFullYear()} CCNA Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
