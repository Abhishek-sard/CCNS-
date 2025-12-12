import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "/finallogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${
      isActive
        ? "text-white bg-teal-500 shadow-lg font-semibold scale-105"
        : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">

        {/* Logo */}
        <img
          src={LOGO}
          alt="Logo"
          className="h-19 transform transition-transform duration-300 hover:scale-105"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-medium text-lg items-center">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><NavLink to="/job" className={linkClasses}>Job Seeker</NavLink></li>
          <li><NavLink to="/currentvaccancy" className={linkClasses}>Current Vacancy</NavLink></li>
          <li><NavLink to="/blog" className={linkClasses}>Blog</NavLink></li>
          <li><NavLink to="/Staffing" className={linkClasses}>Staffing</NavLink></li>
          <li><NavLink to="/ndis" className={linkClasses}>Contact</NavLink></li>
          <li><NavLink to="/NdisContact" className={linkClasses}>Referral</NavLink></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-teal-600 text-3xl p-2 rounded-lg hover:bg-teal-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-6 space-y-3 font-medium text-gray-700">
          <NavLink to="/" className="block py-6 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/job" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Job Seeker</NavLink>
          <NavLink to="/currentvaccancy" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Current Vacancy</NavLink>
          <NavLink to="/blog" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/Staffing" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Staffing</NavLink>
          <NavLink to="/ndis" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>NDIS Care</NavLink>
          <NavLink to="/NdisContact" className="block py-3 px-4 rounded-lg bg-teal-50" onClick={() => setIsOpen(false)}>Referral</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
