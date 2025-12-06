import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "/finallogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${
      isActive
        ? "text-white bg-teal-500 shadow-lg font-semibold scale-105"
        : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-100">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/50 to-transparent animate-pulse-slow"></div>

      <div className="container mx-auto px-2 flex justify-between items-center h-20 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative group">
            <img
              src={LOGO}
              alt="Logo"
              className="h-20 w-90 ml-[-15px] relative z-10 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 font-medium text-lg items-center ml-4 whitespace-nowrap">
          <li className="relative group">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/about" className={linkClasses}>About</NavLink>
          </li>

          {/* JobSeeker Dropdown */}
          <li className="relative group">
            <span className="flex items-center text-gray-700 px-3 py-2 rounded-lg cursor-pointer hover:text-teal-600 hover:bg-teal-50 transition-all duration-300">
              JobSeeker
              <span className="ml-2 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
            </span>

            <ul className="absolute left-0 top-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl w-48 hidden group-hover:block border border-gray-200 overflow-hidden">
              <li className="border-b border-gray-100">
                <NavLink to="/currentvaccancy" className="block px-4 py-3 hover:bg-teal-50 hover:text-teal-600">Current Vacancy</NavLink>
              </li>
              <li className="border-b border-gray-100">
                <NavLink to="/applyonline" className="block px-4 py-3 hover:bg-teal-50 hover:text-teal-600">Apply Online</NavLink>
              </li>
              <li>
                <NavLink to="/job" className="block px-4 py-3 hover:bg-teal-50 hover:text-teal-600">CCNA Care</NavLink>
              </li>
            </ul>
          </li>

          {/* Services Mega Menu */}
          <li className="relative group">
            <span className="flex items-center text-gray-700 px-3 py-2 rounded-lg cursor-pointer hover:text-teal-600 hover:bg-teal-50 transition-all duration-300">
              Services
              <span className="ml-2 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
            </span>

            <ul className="absolute right-1/2 translate-x-1/4 top-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl hidden group-hover:grid grid-cols-3 gap-2 w-[650px] p-6 border border-gray-200">
              {[
                "/staffing",
                "/ndiscover",
                "/nursing",
                "/assist",
                "/lifeStage",
                "/stage",
                "/travel",
                "/community",
                "/dailyTask",
                "/development",
                "/innovCommunity",
                "/household",
                "/participation",
                "/support",
                "/center",
              ].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className="block px-3 py-3 text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 border-l-4 border-transparent hover:border-teal-400"
                  >
                    {
                      [
                        "Staffing & Nursing",
                        "NDIS Services",
                        "Accommodation",
                        "Personal Activities High",
                        "Life Stage Transition",
                        "Personal Activities",
                        "Travel/Transport",
                        "Community Care",
                        "Daily Tasks",
                        "Life Skills",
                        "Community Participation",
                        "Household Tasks",
                        "Community Engage",
                        "Support Coordinator",
                        "Group Activities",
                      ][index]
                    }
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/Staffing" className={linkClasses}>Staffing</NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/ndis" className={linkClasses}>NDIS Care</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-600 text-2xl bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-all duration-300 border border-teal-200 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 px-6 py-6 space-y-3 font-medium text-gray-700">
          <NavLink to="/" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/currentvaccancy" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>Current Vacancy</NavLink>
          <NavLink to="/applyonline" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>Apply Online</NavLink>
          <NavLink to="/job" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>CCNA Care</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
