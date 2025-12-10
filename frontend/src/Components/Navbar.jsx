import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "/finallogo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageDropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const { t } = useTranslation();

  // Only hide Layer 1 (top bar)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling DOWN → hide LAYER 1
        setShowTopBar(false);
      } else {
        // scrolling UP → show LAYER 1
        setShowTopBar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${
      isActive
        ? "text-white bg-teal-500 shadow-lg font-semibold scale-105"
        : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105"
    }`;

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg border-b border-gray-100">

      {/* ------------------------ LAYER 1 (Hide on Scroll Down) ------------------------ */}
      <div
        className={`w-full bg-white border-b border-gray-200 transition-all duration-300 
          ${showTopBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <div className="container mx-auto px-2 flex justify-between items-center h-16">
          <img
            src={LOGO}
            alt="Logo"
            className="h-16 transform transition-transform duration-300 hover:scale-105"
          />
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* ------------------------ LAYER 2 (Always Visible) ------------------------ */}
      <div className="container mx-auto px-2 flex justify-between items-center h-16 bg-white relative">

        <ul className="hidden md:flex space-x-4 font-medium text-lg items-center">
          <li><NavLink to="/" className={linkClasses}>{t("Home")}</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>{t("About")}</NavLink></li>
          <li><NavLink to="/job" className={linkClasses}>{t("JobSeeker")}</NavLink></li>
          <li><NavLink to="/currentvaccancy" className={linkClasses}>{t("Current Vacancy")}</NavLink></li>
          <li><NavLink to="/applyonline" className={linkClasses}>{t("Apply Online")}</NavLink></li>
          <li><NavLink to="/blog" className={linkClasses}>{t("Blog")}</NavLink></li>
          <li><NavLink to="/Staffing" className={linkClasses}>{t("Staffing")}</NavLink></li>
          <li><NavLink to="/ndis" className={linkClasses}>{t("NDIS Care")}</NavLink></li>
          <li><NavLink to="/NdisContact" className={linkClasses}>{t("Contact")}</NavLink></li>
        </ul>

        <button
          className="md:hidden text-teal-600 text-2xl bg-teal-50 rounded-xl p-3 hover:bg-teal-100 border border-teal-200 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ------------------------ Mobile Menu ------------------------ */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 px-6 py-6 space-y-3 font-medium text-gray-700">
          <NavLink to="/" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("Home")}</NavLink>
          <NavLink to="/about" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("About")}</NavLink>
          <NavLink to="/job" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("JobSeeker")}</NavLink>
          <NavLink to="/currentvaccancy" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("Current Vacancy")}</NavLink>
          <NavLink to="/applyonline" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("Apply Online")}</NavLink>
          <NavLink to="/blog" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("Blog")}</NavLink>
          <NavLink to="/Staffing" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("Staffing")}</NavLink>
          <NavLink to="/ndis" className="block py-4 px-4 rounded-xl bg-teal-50" onClick={() => setIsOpen(false)}>{t("NDIS Care")}</NavLink>

          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
