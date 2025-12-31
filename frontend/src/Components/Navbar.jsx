import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LOGO from "/finallogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  // Initialize menu mode from session storage or default
  const [menuMode, setMenuMode] = useState(() => {
    return sessionStorage.getItem("menuMode") || "default";
  });

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    // 1. NDIS paths force NDIS mode
    if (path === "/ndis" || path === "/ndiscover" || path === "/ndiscontact") {
      setMenuMode("ndis");
      sessionStorage.setItem("menuMode", "ndis");
    }
    // 2. Staffing path forces staffing mode
    else if (path === "/staffing") {
      setMenuMode("staffing");
      sessionStorage.setItem("menuMode", "staffing");
    }
    // 3. Home resets to default
    else if (path === "/") {
      setMenuMode("default");
      sessionStorage.setItem("menuMode", "default");
    }
    // Shared paths like /about, /contact, /job KEEP the current mode

    // Auto-close mobile menu on route change
    setIsOpen(false);
  }, [location.pathname, menuMode]);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${isActive
      ? "text-white bg-teal-500 shadow-lg font-semibold scale-105"
      : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  // Animated list item for Desktop
  const AnimatedItem = ({ show, children }) => (
    <li
      className={`transition-all duration-300 ease-in-out ${show
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-2 pointer-events-none hidden"
        }`}
    >
      {children}
    </li>
  );

  // Helper to render desktop menu items
  const renderDesktopMenu = () => {

    // 2. Staffing Mode (Persistent)
    if (menuMode === "staffing") {
      return (
        <>
          <AnimatedItem show={true}><NavLink to="/Staffing" className={linkClasses}>Staffing</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/job" className={linkClasses}>Job Seeker</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/currentvaccancy" className={linkClasses}>Current Vacancy</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/about" className={linkClasses}>About Us</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/blog" className={linkClasses}>Blog</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/ndis" className={linkClasses}>NDIS Services</NavLink></AnimatedItem>
        </>
      );
    }

    // 3. NDIS Mode (Persistent)
    if (menuMode === "ndis") {
      return (
        <>
          <AnimatedItem show={true}><NavLink to="/ndiscover" className={linkClasses}>NDIS Services</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/NdisContact" className={linkClasses}>Referral</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/ndis" className={linkClasses}>Contact Us</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/about" className={linkClasses}>About Us</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/blog" className={linkClasses}>Blog</NavLink></AnimatedItem>
          <AnimatedItem show={true}><NavLink to="/Staffing" className={linkClasses}>Staffing Solution</NavLink></AnimatedItem>
        </>
      );
    }

    // 4. Default Mode
    // Note: User changed "Home" to "Ndis Care" (/NdisCover) in the default menu.
    // Also user had conditional rendering for Job Seeker and Current Vacancy based on !isNdisPage.
    // With menuMode='ndis', we don't reach here so we don't need !isNdisPage check strictly,
    // but we can leave it or simplify since we are in Default mode.
    // Since 'isNdisPage' was removed from top scope, we generally assume Default mode shows general links.
    // However, the user manually used `!isNdisPage` in their last edit.
    // `isNdisPage` was `location.pathname === "/NdisCover"`.
    // If we are on `/NdisCover`, we should be in 'ndis' mode (handled above).
    // So if we reach here, we are NOT in 'ndis' mode, so `!isNdisPage` is likely true.
    // So we can just show the links.

    return (
      <>
        <AnimatedItem show={true}><NavLink to="/NdisCover" className={linkClasses}>NDIS Services</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/about" className={linkClasses}>About Us</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/job" className={linkClasses}>Job Seeker</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/currentvaccancy" className={linkClasses}>Current Vacancy</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/blog" className={linkClasses}>Blog</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/Staffing" className={linkClasses}>Staffing Solution</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/ndis" className={linkClasses}>Contact Us</NavLink></AnimatedItem>
        <AnimatedItem show={true}><NavLink to="/NdisContact" className={linkClasses}>Referral</NavLink></AnimatedItem>
      </>
    );
  };

  // Helper to render mobile menu items
  const renderMobileMenu = () => {
    const mobileLinkClass = "block py-3 px-4 rounded-lg bg-teal-50";


    // 2. Staffing Mode
    if (menuMode === "staffing") {
      return (
        <>
          <NavLink to="/Staffing" className={mobileLinkClass}>Staffing</NavLink>
          <NavLink to="/job" className={mobileLinkClass}>Job Seeker</NavLink>
          <NavLink to="/currentvaccancy" className={mobileLinkClass}>Current Vacancy</NavLink>
          <NavLink to="/about" className={mobileLinkClass}>About Us</NavLink>
          <NavLink to="/blog" className={mobileLinkClass}>Blog</NavLink>
          <NavLink to="/ndis" className={mobileLinkClass}>NDIS Services</NavLink>
        </>
      );
    }

    // 3. NDIS Mode
    if (menuMode === "ndis") {
      return (
        <>
          <NavLink to="/ndiscover" className={mobileLinkClass}>NDIS Services</NavLink>
          <NavLink to="/NdisContact" className={mobileLinkClass}>Referral</NavLink>
          <NavLink to="/ndis" className={mobileLinkClass}>Contact Us</NavLink>
          <NavLink to="/about" className={mobileLinkClass}>About Us</NavLink>
          <NavLink to="/blog" className={mobileLinkClass}>Blog</NavLink>
          <NavLink to="/Staffing" className={mobileLinkClass}>Staffing Solution</NavLink>
        </>
      );
    }

    // 4. Default Mobile Menu
    return (
      <>
        <NavLink to="/Ndiscover" className={mobileLinkClass}>NDIS Services</NavLink>
        <NavLink to="/about" className={mobileLinkClass}>About Us</NavLink>
        <NavLink to="/job" className={mobileLinkClass}>Job Seeker</NavLink>
        <NavLink to="/currentvaccancy" className={mobileLinkClass}>Current Vacancy</NavLink>
        <NavLink to="/blog" className={mobileLinkClass}>Blog</NavLink>
        <NavLink to="/Staffing" className={mobileLinkClass}>Staffing Solution</NavLink>
        <NavLink to="/ndis" className={mobileLinkClass}>Contact Us</NavLink>
        <NavLink to="/NdisContact" className={mobileLinkClass}>Referral</NavLink>
      </>
    );
  };

  const handleLogoClick = () => {
    // Reset to default when clicking logo
    setMenuMode("default");
    sessionStorage.setItem("menuMode", "default");
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">

        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={handleLogoClick}>
          <img
            src={LOGO}
            alt="Logo"
            className="h-19 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-medium text-lg items-center">
          {renderDesktopMenu()}
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
          {renderMobileMenu()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
