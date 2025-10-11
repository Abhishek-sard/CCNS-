import React from "react";
import { FaUser, FaFileAlt, FaBriefcase, FaBlog, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const MainDashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { name: "Register", icon: <FaUser />, path: "register" },
    { name: "Online Form Applied", icon: <FaFileAlt />, path: "online-form" },
    { name: "Vacancy", icon: <FaBriefcase />, path: "vacancy" },
    { name: "Blog Management", icon: <FaBlog />, path: "blog" },
    { name: "Team Management", icon: <FaUsers />, path: "team" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full flex flex-col z-50">
        <h2 className="text-2xl font-bold p-6 border-b border-gray-200 text-center text-blue-600">
          Admin Dashboard
        </h2>
        
        {/* User Info */}
        <div className="p-4 border-b border-gray-200 bg-blue-50">
          <p className="text-sm text-gray-600">Welcome,</p>
          <p className="font-semibold text-blue-700">{user?.name || 'Admin'}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>

        <nav className="mt-6 flex flex-col gap-2 px-2 flex-1">
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

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 font-medium hover:bg-red-50 transition cursor-pointer w-full"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
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
