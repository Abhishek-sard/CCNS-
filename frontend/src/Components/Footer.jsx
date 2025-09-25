import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from '../assets/logoccna1.png'

const Footer = () => {
  return (
    <footer className="bg-yellow-600 py-6 text-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">NDIS Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Staffing Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">📞 Phone: +61 123 456 789</p>
          <p className="mb-2">✉️ Email: info@ccnaagency.com</p>
          <p>📍 Office: 123 Health St, Sydney, Australia</p>
        </div>

        {/* NDIS Provider */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NDIS Provider</h3>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={Logo}
              alt="NDIS Logo"
              className="h-80 w-80 md:h-24 md:w-24 object-contain"
            />
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="text-center mt-8 text-black-400 text-sm">
        &copy; {new Date().getFullYear()} CCNA Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
