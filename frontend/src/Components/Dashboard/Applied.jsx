import React, { useEffect, useState } from "react";

const Applied = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/applications");
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
    console.log("Full URL will be:", `http://localhost:5000/api/applications/${id}`);
    
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        const url = `http://localhost:5000/api/applications/${id}`;
        console.log("Making DELETE request to:", url);
        
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Delete successful:", data);
          // Remove the deleted application from the state
          setApplications(applications.filter(app => app._id !== id));
          alert("Application deleted successfully!");
        } else {
          const text = await response.text();
          console.log("Error response text:", text);
          alert(`Error: ${response.status} - ${text}`);
        }
      } catch (error) {
        console.error("Error deleting application:", error);
        alert("Network error. Please check if the backend server is running on port 5000.");
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Submitted Applications</h1>
      
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    No applications found
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app._id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{app.name}</td>
                    <td className="p-3">{app.email}</td>
                    <td className="p-3">{app.phone}</td>
                    <td className="p-3 max-w-xs truncate" title={app.message}>
                      {app.message}
                    </td>
                    <td className="p-3 text-sm text-gray-600">
                      {new Date(app.date).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(app._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Applied;
