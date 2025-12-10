import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-all"
      >
        lan
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50">
          <li
            onClick={() => changeLanguage("en")}
            className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
          >
            English
          </li>
          <li
            onClick={() => changeLanguage("np")}
            className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
          >
            नेपाली
          </li>
          <li
            onClick={() => changeLanguage("hi")}
            className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
          >
            हिन्दी
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
