import React, { useEffect, useState } from "react";

const Applied = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-25">
      <h1 className="text-2xl font-bold mb-4">Submitted Applications</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{app.name}</td>
                <td className="p-3">{app.email}</td>
                <td className="p-3">{app.phone}</td>
                <td className="p-3">{app.message}</td>
                <td className="p-3">{new Date(app.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applied;
