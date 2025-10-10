import React from "react";
import { FaUser, FaFileAlt, FaBriefcase } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const MainDashboard = () => {
  const menuItems = [
    { name: "Register", icon: <FaUser />, path: "register" },
    { name: "Online Form Applied", icon: <FaFileAlt />, path: "online-form" },
    { name: "Vacancy", icon: <FaBriefcase />, path: "vacancy" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full flex flex-col z-50">
        <h2 className="text-2xl font-bold p-6 border-b border-gray-200 text-center text-blue-600">
          Admin Dashboard
        </h2>
        <nav className="mt-6 flex flex-col gap-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path} // Relative path works with nested routing
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 transition cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8 flex-1 overflow-auto pb-20">
        {/* Render child routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashboard;
