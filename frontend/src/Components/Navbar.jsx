import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "/logoccna.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg ${
      isActive
        ? "text-white bg-blue-500 shadow-lg font-semibold scale-105"
        : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-100">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/50 to-transparent animate-pulse-slow"></div>

      <div className="container mx-auto px-4 flex justify-between items-center h-22 relative z-10">
        {/* Logo with Clean Styling */}
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <img
              src={LOGO}
              alt="Logo"
              className="h-100 mt-6 w-100 ml-2 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div> 

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 font-medium text-lg items-center mx-auto">
          <li className="relative group">
            <NavLink to="/" className={linkClasses}>
              <span className="relative z-10">Home</span>
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/about" className={linkClasses}>
              <span className="relative z-10">About</span>
            </NavLink>
          </li>

          {/* JobSeeker Dropdown */}
          <li className="relative group">
            <span className="flex items-center text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:text-teal-600 hover:bg-teal-50 transition-all duration-300">
              JobSeeker
              <span className="ml-2 transform group-hover:rotate-180 transition-transform duration-300 text-Peaches-500">
                ▼
              </span>
            </span>
            {/* Dropdown */}
            <ul className="absolute left-0 top-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl w-48 hidden group-hover:block border border-gray-200 overflow-hidden">
              <li className="border-b border-gray-100">
                <NavLink
                  to="/currentvaccancy"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 hover:translate-x-2"
                >
                  Current Vacancy
                </NavLink>
              </li>
              <li className="border-b border-gray-100">
                <NavLink
                  to="/applyonline"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 hover:translate-x-2"
                >
                  Apply Online
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/job"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 hover:translate-x-2"
                >
                  CCNA Agency
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Services Mega Dropdown */}
          <li className="relative group">
            <span className="flex items-center text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:text-teal-600 hover:bg-teal-50 transition-all duration-300">
              Services
              <span className="ml-2 transform group-hover:rotate-180 transition-transform duration-300 text-Peaches-500">
                ▼
              </span>
            </span>
            {/* Dropdown */}
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
                <li key={index} className="relative group">
                  <NavLink
                    to={path}
                    className="block px-3 py-3 text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 hover:scale-105 border-l-4 border-transparent hover:border-teal-400"
                  >
                    <span className="text-sm font-medium leading-tight">
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
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <NavLink to="/blog" className={linkClasses}>
              <span className="relative z-10">Blog</span>
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/Staffing" className={linkClasses}>
              <span className="relative z-10">Staffing</span>
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/ndis" className={linkClasses}>
              <span className="relative z-10">NDIS Care</span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-600 text-2xl bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-all duration-300 border border-teal-200 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {isOpen ? "✕" : "☰"}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 px-6 py-6 space-y-3 font-medium text-gray-700">
          <NavLink
            to="/"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/currentvaccancy"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Current Vacancy
          </NavLink>
          <NavLink
            to="/applyonline"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Apply Online
          </NavLink>
          <NavLink
            to="/job"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            CCNA Agency
          </NavLink>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center w-full py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300"
              onClick={() => setDropdown(!dropdown)}
            >
              Services
              <span
                className={`ml-auto transform transition-transform duration-300 text-teal-500 ${
                  dropdown ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {dropdown && (
              <ul className="mt-3 bg-teal-50 backdrop-blur-md rounded-xl p-3 border border-teal-200 flex flex-wrap gap-3 overflow-x-auto max-h-[250px]">
                {[
                  "NDIS Services",
                  "Staffing & Nursing",
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
                ].map((service, index) => (
                  <li key={index}>
                    <NavLink
                      to={
                        [
                          "/ndiscover",
                          "/staffing",
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
                        ][index]
                      }
                      className="block px-3 py-2 text-gray-700 rounded-lg hover:bg-teal-100 hover:text-teal-600 transition-all duration-200 hover:translate-x-2 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/blog"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/Staffing"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Staffing
          </NavLink>
          <NavLink
            to="/ndis"
            className="block py-4 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 hover:text-teal-600 transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            NDIS Care
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;