import React, { useState } from "react";
import { createVacancy } from "./VacancyApi";

const VacancyForm = ({ onVacancyAdded }) => {
  const [vacancy, setVacancy] = useState({
    title: "",
    department: "",
    location: "",
    description: "",
    requirements: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files && files[0] ? files[0] : null;
      setVacancy({ ...vacancy, image: file });
      setPreviewUrl(file ? URL.createObjectURL(file) : null);
    } else {
      setVacancy({ ...vacancy, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", vacancy.title);
      formData.append("department", vacancy.department);
      formData.append("location", vacancy.location);
      formData.append("description", vacancy.description);
      formData.append("requirements", vacancy.requirements);
      if (vacancy.image) formData.append("image", vacancy.image);

      const res = await createVacancy(formData);
      onVacancyAdded(res); // API returns created object
      setVacancy({ title: "", department: "", location: "", description: "", requirements: "", image: null });
      setPreviewUrl(null);
      alert("Vacancy added successfully!");
    } catch (error) {
      console.error("Error adding vacancy:", error);
      alert(error?.message || "Failed to add vacancy. Please try again.");
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

      <div>
        <label className="block font-semibold mb-1">Image (optional)</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {previewUrl && (
          <div className="mt-3">
            <img src={previewUrl} alt="Preview" className="h-32 w-auto rounded border" />
          </div>
        )}
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
