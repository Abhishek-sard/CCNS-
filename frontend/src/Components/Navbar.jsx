import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LOGO from "/finallogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isNdisPage = location.pathname === "/NdisCover";
  const isStaffingPage = location.pathname === "/Staffing";

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${
      isActive
        ? "text-white bg-teal-500 shadow-lg font-semibold scale-105"
        : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  // Animated list item
  const AnimatedItem = ({ show, children }) => (
    <li
      className={`transition-all duration-300 ease-in-out ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none hidden"
      }`}
    >
      {children}
    </li>
  );

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={LOGO}
            alt="Logo"
            className="h-19 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-medium text-lg items-center">

          <AnimatedItem show={true}>
            <NavLink to="/" className={linkClasses}>Home</NavLink>
          </AnimatedItem>

          <AnimatedItem show={true}>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
          </AnimatedItem>

          <AnimatedItem show={!isNdisPage}>
            <NavLink to="/job" className={linkClasses}>Job Seeker</NavLink>
          </AnimatedItem>

          <AnimatedItem show={!isNdisPage}>
            <NavLink to="/currentvaccancy" className={linkClasses}>
              Current Vacancy
            </NavLink>
          </AnimatedItem>

          <AnimatedItem show={true}>
            <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
          </AnimatedItem>

          <AnimatedItem show={true}>
            <NavLink to="/Staffing" className={linkClasses}>Staffing Solution</NavLink>
          </AnimatedItem>

          <AnimatedItem show={!isStaffingPage}>
            <NavLink to="/ndis" className={linkClasses}>Contact Us</NavLink>
          </AnimatedItem>

          <AnimatedItem show={true}>
            <NavLink to="/NdisContact" className={linkClasses}>Referral</NavLink>
          </AnimatedItem>

        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-teal-600 text-3xl p-2 rounded-lg hover:bg-teal-50 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-6 space-y-3 font-medium">

          <NavLink to="/" className="block py-3 px-4 rounded-lg bg-teal-50">Home</NavLink>
          <NavLink to="/about" className="block py-3 px-4 rounded-lg bg-teal-50">About</NavLink>

          {!isNdisPage && (
            <NavLink to="/job" className="block py-3 px-4 rounded-lg bg-teal-50">
              Job Seeker
            </NavLink>
          )}

          {!isNdisPage && (
            <NavLink to="/currentvaccancy" className="block py-3 px-4 rounded-lg bg-teal-50">
              Current Vacancy
            </NavLink>
          )}

          <NavLink to="/blog" className="block py-3 px-4 rounded-lg bg-teal-50">Blog</NavLink>
          <NavLink to="/Staffing" className="block py-3 px-4 rounded-lg bg-teal-50">Staffing Solution</NavLink>

          {!isStaffingPage && (
            <NavLink to="/ndis" className="block py-3 px-4 rounded-lg bg-teal-50">
              Contact Us
            </NavLink>
          )}

          <NavLink to="/NdisContact" className="block py-3 px-4 rounded-lg bg-teal-50">
            Referral
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
