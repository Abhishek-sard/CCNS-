import React, { useState, useEffect } from "react";
import { createVacancy, updateVacancy } from "./VacancyApi";

const VacancyForm = ({ onVacancyAdded, editVacancy, clearEdit }) => {
  const [vacancy, setVacancy] = useState({
    title: "",
    department: "",
    location: "",
    description: "",
    requirements: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  // ✅ When editVacancy changes, load data into the form
  useEffect(() => {
    if (editVacancy) {
      setVacancy({
        title: editVacancy.title || "",
        department: editVacancy.department || "",
        location: editVacancy.location || "",
        description: editVacancy.description || "",
        requirements: editVacancy.requirements || "",
        image: null, // new image optional
      });
      setPreviewUrl(editVacancy.image ? `/uploads/${editVacancy.image}` : null);
    } else {
      setVacancy({
        title: "",
        department: "",
        location: "",
        description: "",
        requirements: "",
        image: null,
      });
      setPreviewUrl(null);
    }
  }, [editVacancy]);

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

      let res;
      if (editVacancy) {
        // ✅ Update vacancy
        res = await updateVacancy(editVacancy._id, formData);
        alert("Vacancy updated successfully!");
        clearEdit();
      } else {
        // ✅ Create new vacancy
        res = await createVacancy(formData);
        alert("Vacancy added successfully!");
      }

      onVacancyAdded(res.data);
      setVacancy({
        title: "",
        department: "",
        location: "",
        description: "",
        requirements: "",
        image: null,
      });
      setPreviewUrl(null);
    } catch (error) {
      console.error("Error saving vacancy:", error);
      alert(error?.message || "Failed to save vacancy. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        {editVacancy ? "Edit Vacancy" : "Add New Vacancy"}
      </h2>
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

          {previewUrl ? (
            <div className="mt-3">
              <img
                src={
                  previewUrl.startsWith?.("blob")
                    ? previewUrl
                    : `${process.env.REACT_APP_API_URL || ""}${previewUrl}`
                }
                alt="Preview"
                className="h-32 w-auto rounded border"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ) : null}

        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className={`text-white px-4 py-2 rounded transition ${editVacancy
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-700 hover:bg-blue-800"
              }`}
          >
            {editVacancy ? "Update Vacancy" : "Add Vacancy"}
          </button>

          {editVacancy && (
            <button
              type="button"
              onClick={clearEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;
