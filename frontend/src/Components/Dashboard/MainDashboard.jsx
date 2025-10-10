import React from "react";
import { FaUser, FaFileAlt, FaBriefcase } from "react-icons/fa";
import { Link, Routes, Route } from "react-router-dom";
import RegisterPage from "./VacancyForm.jsx";
import OnlineFormPage from "./Applied.jsx";
import VacancyPage from "./AdminDashboard.jsx";

const MainDashboard = () => {
  const menuItems = [
    { name: "Register", icon: <FaUser />, path: "register" },
    { name: "Online Form Applied", icon: <FaFileAlt />, path: "online-form" },
    { name: "Vacancy", icon: <FaBriefcase />, path: "vacancy" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-gray-200 text-center text-blue-600">
          Admin Dashboard
        </h2>
        <nav className="mt-6 flex flex-col gap-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path} // ✅ relative path is correct
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8 flex-1 overflow-auto pb-20">
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="online-form" element={<OnlineFormPage />} />
          <Route path="vacancy" element={<VacancyPage />} /> {/* ✅ fixed space */}
        </Routes>
      </div>
    </div>
  );
};

export default MainDashboard;
