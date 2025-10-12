import React from "react";
import { FaUsers, FaFileAlt, FaBriefcase, FaBlog, FaChartLine, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardOverview = () => {
  // Mock data - you can replace with real API calls
  const stats = {
    totalApplications: 25,
    activeVacancies: 8,
    teamMembers: 12,
    publishedBlogs: 15,
    totalEnquiries: 32
  };

  const quickActions = [
    {
      title: "Manage Vacancies",
      description: "Create and manage job postings",
      icon: <FaBriefcase className="text-2xl text-blue-600" />,
      link: "/dashboard/vacancy",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "View Applications",
      description: "Review submitted applications",
      icon: <FaFileAlt className="text-2xl text-green-600" />,
      link: "/dashboard/online-form",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "Team Management",
      description: "Manage team members",
      icon: <FaUsers className="text-2xl text-purple-600" />,
      link: "/dashboard/team",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Blog Management",
      description: "Create and edit blog posts",
      icon: <FaBlog className="text-2xl text-orange-600" />,
      link: "/dashboard/blog",
      color: "bg-orange-50 hover:bg-orange-100"
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to your admin dashboard. Manage your agency efficiently.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
            </div>
            <FaFileAlt className="text-3xl text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Vacancies</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeVacancies}</p>
            </div>
            <FaBriefcase className="text-3xl text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Members</p>
              <p className="text-2xl font-bold text-gray-900">{stats.teamMembers}</p>
            </div>
            <FaUsers className="text-3xl text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Published Blogs</p>
              <p className="text-2xl font-bold text-gray-900">{stats.publishedBlogs}</p>
            </div>
            <FaBlog className="text-3xl text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Enquiries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalEnquiries}</p>
            </div>
            <FaEnvelope className="text-3xl text-red-500" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`${action.color} p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {action.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">New application received</p>
              <p className="text-xs text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Team member added</p>
              <p className="text-xs text-gray-600">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Blog post published</p>
              <p className="text-xs text-gray-600">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
