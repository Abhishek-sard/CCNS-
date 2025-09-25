import React, { useState } from "react";
import LOGO from '/logoccna.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-gray-600 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-22">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={LOGO} 
            alt="Logo" 
            className="h-100 mt-6 w-100 ml-2" // height set to 60px (h-16 = 64px)
          />
        </div>
        
        {/* Desktop Menu (centered) */}
        <ul src="/" className="hidden md:flex space-x-8 font-medium items-center mx-auto text-white">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">About</li>
          <li className="cursor-pointer hover:text-gray-200">Job Seekers</li>
          <li className="relative group cursor-pointer hover:text-gray-200">
            <span className="flex items-center">Services</span>
            {/* Dropdown */}
            <ul className="absolute left-0 top-6 bg-white shadow-md rounded-md w-44 hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer text-black">NDIS Services</li>
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer text-black">Staffing & Nursing</li>
            </ul>
          </li>
          <li className="cursor-pointer hover:text-gray-200">Blog</li>
          <li className="cursor-pointer hover:text-gray-200">Contact</li>
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
          <p className="cursor-pointer hover:text-gray-200">Home</p>
          <p className="cursor-pointer hover:text-gray-200">About</p>
          <p className="cursor-pointer hover:text-gray-200">Job Seekers</p>
          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center w-full"
              onClick={() => setDropdown(!dropdown)}
            >
              Services
            </button>
            {dropdown && (
              <ul className="ml-6 mt-2 space-y-2 bg-white rounded-md shadow-md text-black">
                <li className="hover:text-blue-600 cursor-pointer px-2 py-1">NDIS Services</li>
                <li className="hover:text-blue-600 cursor-pointer px-2 py-1">Staffing & Nursing</li>
              </ul>
            )}
          </div>
          <p className="cursor-pointer hover:text-gray-200">Blog</p>
          <p className="cursor-pointer hover:text-gray-200">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
