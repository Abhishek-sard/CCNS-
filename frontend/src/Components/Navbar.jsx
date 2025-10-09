import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from '/logoccna.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition ${isActive ? "text-blue-400 font-bold underline" : "text-white hover:text-gray-200"
    }`;

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-gray-600 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-22">

        {/* Logo */}
        <div className="flex items-center">
          <img src={LOGO} alt="Logo" className="h-100 mt-6 w-100 ml-2" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-lg items-center mx-auto">
          <li>
            <NavLink to="/" className={linkClasses}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
          </li>
          <li className="relative group">
            <span className="flex items-center text-white">JobSeeker</span>
            {/* Dropdown */}
            <ul className="absolute left-0 top-6 bg-white shadow-md rounded-md w-44 hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/currentvaccancy" className="block text-black">Current Vacancy</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/applyonline" className="block text-black">Apply Online</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/job" className="block text-black">CCNA Agency</NavLink>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <span className="flex items-center text-white">Services</span>
            <ul className="absolute left-0 top-6 bg-white shadow-md rounded-md w-44 hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/staffing" className="block text-black">Staffing & Nursing</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/ndiscover" className="block text-black">NDIS Services</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/nursing" className="block text-black">Accommodation / Tendency</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/assist" className="block text-black">Assist Personal Activities High
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/lifeStage" className="block text-black">Assist-Life Stage, Transition
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/stage" className="block text-black">Assist Personal Activities
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/travel" className="block text-black">Assist Travel/Transport
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-300">
                <NavLink to="/community" className="block text-black">Community Nursing Care 
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses}>Register</NavLink>
          </li>
          <li>
            <NavLink to="/ndis" className={linkClasses}>NDIS</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-gray-600 px-6 py-4 space-y-3 font-medium text-white">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/currentvaccancy" className={linkClasses}>Current Vacancy</NavLink>
          <NavLink to="/applyonline" className={linkClasses}>Apply Online</NavLink>
          <NavLink to="/job" className={linkClasses}>CCNA Agency</NavLink>

          {/* Dropdown */}
          <div>
            <button
              className="flex items-center w-full"
              onClick={() => setDropdown(!dropdown)}
            >
              Services
            </button>
            {dropdown && (
              <ul className="ml-6 mt-2 space-y-2 bg-white rounded-md shadow-md text-black">
                <li>
                  <NavLink to="/ndiscover" className="block px-2 py-1 hover:text-blue-600">
                    NDIS Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/staffing" className="block px-2 py-1 hover:text-blue-600">
                    Staffing & Nursing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nursing" className="block px-2 py-1 hover:text-blue-600">
                    Accommodation / Tendency
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/assist" className="block px-2 py-1 hover:text-blue-600">
                    Assist Personal Activities High
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lifeStage" className="block px-2 py-1 hover:text-blue-600">
                    Assist-Life Stage, Transition
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/stage" className="block px-2 py-1 hover:text-blue-600">
                    Assist Personal Activities
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/travel" className="block px-2 py-1 hover:text-blue-600">
                    Assist Travel/Transport
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/community" className="block px-2 py-1 hover:text-blue-600">
                    Community Nursing Care
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
          <NavLink to="/contact" className={linkClasses}>Register</NavLink>
          <NavLink to="/ndis" className={linkClasses}>NDIS</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
