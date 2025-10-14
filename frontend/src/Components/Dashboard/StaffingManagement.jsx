import React, { useEffect, useState } from "react";
import { staffingApi } from "../../services/staffingApi";

const StaffingManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await staffingApi.list();
      setItems(data);
    } catch (e) {
      setError("Failed to load staffing requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this request?")) return;
    try {
      await staffingApi.remove(id);
      setItems((prev) => prev.filter((i) => i._id !== id));
    } catch (e) {
      alert("Failed to delete");
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Staffing Requests</h1>
        <button onClick={fetchItems} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Refresh</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Company</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Needs</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Required Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Preferred Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Submitted</th>
                <th className="px-4 py-3"/>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((it) => (
                <tr key={it._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{it.name}</td>
                  <td className="px-4 py-3 text-sm">{it.company || '-'}</td>
                  <td className="px-4 py-3 text-sm">{it.email}</td>
                  <td className="px-4 py-3 text-sm">{it.phone}</td>
                  <td className="px-4 py-3 text-sm">{Array.isArray(it.staffingNeeds) ? it.staffingNeeds.join(', ') : '-'}</td>
                  <td className="px-4 py-3 text-sm">{it.requiredDate}</td>
                  <td className="px-4 py-3 text-sm">{it.contactMethod}</td>
                  <td className="px-4 py-3 text-sm">{it.contactDateTime}</td>
                  <td className="px-4 py-3 text-sm">{new Date(it.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => handleDelete(it._id)} className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan="10" className="px-4 py-6 text-center text-gray-500">No staffing requests yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StaffingManagement;


