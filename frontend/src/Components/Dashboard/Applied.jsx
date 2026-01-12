import React, { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_IMAGE } from "../../services/constants";


const Applied = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/applications`);
      const data = await response.json();
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log("Delete button clicked for ID:", id);
    console.log("Full URL will be:", `${BASE_URL}/applications/${id}`);

    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        const url = `${BASE_URL}/applications/${id}`;
        console.log("Making DELETE request to:", url);

        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (response.ok) {
          const data = await response.json();
          console.log("Delete successful:", data);
          // Remove the deleted application from the state
          setApplications(applications.filter((app) => app._id !== id));
          alert("Application deleted successfully!");
        } else {
          const text = await response.text();
          console.log("Error response text:", text);
          alert(`Error: ${response.status} - ${text}`);
        }
      } catch (error) {
        console.error("Error deleting application:", error);
        alert(
          "Network error. Please check if the backend server is running on port 5000."
        );
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Submitted Applications
            </h1>
            <p className="text-gray-500 mt-2">Manage and review all job applications</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
            Total: {applications.length}
          </div>

        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-600"></div>
            <p className="mt-4 text-gray-500 font-medium">Loading applications...</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Resume</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center text-gray-400">
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-4xl mb-3">📭</span>
                          <span className="font-medium">No applications received yet</span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app._id} className="hover:bg-blue-50/30 transition-colors group">

                        {/* Candidate Name & Avatar Placeholder */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                              {app.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">{app.name}</div>
                              {/* Message Tooltip/Preview could go here if crowded, but let's keep clean */}
                            </div>
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-900 flex items-center gap-2">
                              <span className="text-gray-400 text-xs">✉️</span> {app.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                              <span className="text-gray-400 text-xs">📞</span> {app.phone}
                            </div>
                          </div>
                        </td>

                        {/* Position */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                            {app.vacancyTitle || "General Application"}
                          </span>
                        </td>

                        {/* Job Type */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${app.jobType === 'Permanent' ? 'bg-green-50 text-green-700 border-green-100' :
                              app.jobType === 'Temporary' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                'bg-gray-50 text-gray-700 border-gray-100'
                            }`}>
                            {app.jobType || "N/A"}
                          </span>
                        </td>

                        {/* Resume */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          {app.resume ? (
                            <a
                              href={`${BASE_URL_IMAGE}/uploads/${app.resume}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-900 font-medium text-sm flex items-center gap-1 group-hover:underline"
                            >
                              <span>📄</span> View Resume
                            </a>
                          ) : (
                            <span className="text-gray-400 text-sm italic">No resume</span>
                          )}
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleDelete(app._id)}
                            className="text-red-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50"
                            title="Delete Application"
                          >
                            <span className="sr-only">Delete</span>
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Optional Pagination Footer could go here */}
            {applications.length > 0 && (
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-sm text-gray-500">
                Showing all {applications.length} applications
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Applied;
