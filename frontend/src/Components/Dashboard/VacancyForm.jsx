import React, { useState } from "react";
import { createVacancy } from "./VacancyApi";

const VacancyForm = ({ onVacancyAdded }) => {
  const [vacancy, setVacancy] = useState({
    title: "",
    department: "",
    location: "",
    description: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setVacancy({ ...vacancy, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createVacancy(vacancy);
      onVacancyAdded(res.data); // Update parent state
      setVacancy({ title: "", department: "", location: "", description: "", requirements: "" }); // Clear form
      alert("Vacancy added successfully!");
    } catch (error) {
      console.error("Error adding vacancy:", error);
      alert("Failed to add vacancy. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add New Vacancy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={vacancy.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={vacancy.department}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={vacancy.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={vacancy.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Requirements (optional)</label>
          <textarea
            name="requirements"
            value={vacancy.requirements}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Add Vacancy
        </button>
      </form>
    </div>
  );
};

export default VacancyForm;
