import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { BASE_URL } from "../../services/constants";

const BranchesList = () => {
  const [branches, setBranches] = useState([]);
  const API_URL = `${BASE_URL}/branches`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBranches(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Our Branch Locations
      </h2>

      {branches.length === 0 ? (
        <p className="text-center text-gray-500">No branches available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div
              key={branch._id}
              className="bg-white shadow-md rounded-lg p-5 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {branch.name}
              </h3>
              <p className="text-gray-600">{branch.address}</p>
              {branch.phone && (
                <p className="mt-2 text-blue-600 font-medium flex items-center gap-2">
                  <FaPhone /> {branch.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BranchesList;
