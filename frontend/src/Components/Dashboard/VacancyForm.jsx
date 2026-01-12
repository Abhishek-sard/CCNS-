import React, { useState, useEffect } from "react";
import { createVacancy, updateVacancy } from "./VacancyApi";

const VacancyForm = ({ onVacancyAdded, editVacancy, clearEdit }) => {
  const [vacancy, setVacancy] = useState({
    title: "",
    department: "",
    location: "",
    jobType: "Permanent",
    publishedDate: new Date().toISOString().split('T')[0],
    description: "",
    requirements: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  // ✅ Use environment variable for API URL
  const API_URL = import.meta.env.VITE_API_URL || "";


  // Load form data if editing
  useEffect(() => {
    if (editVacancy) {
      setVacancy({
        title: editVacancy.title || "",
        department: editVacancy.department || "",
        location: editVacancy.location || "",
        jobType: editVacancy.jobType || "Permanent",
        publishedDate: editVacancy.publishedDate ? new Date(editVacancy.publishedDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        description: editVacancy.description || "",
        requirements: editVacancy.requirements || "",
        image: null,
      });
      setPreviewUrl(editVacancy.image ? `/uploads/${editVacancy.image}` : null);
    } else {
      setVacancy({
        title: "",
        department: "",
        location: "",
        jobType: "Permanent",
        publishedDate: new Date().toISOString().split('T')[0],
        description: "",
        requirements: "",
        image: null,
      });
      setPreviewUrl(null);
    }
  }, [editVacancy]);

  // Handle input changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", vacancy.title);
      formData.append("department", vacancy.department);
      formData.append("location", vacancy.location);
      formData.append("jobType", vacancy.jobType);
      formData.append("publishedDate", vacancy.publishedDate);
      formData.append("description", vacancy.description);
      formData.append("requirements", vacancy.requirements);
      if (vacancy.image) formData.append("image", vacancy.image);

      let res;
      if (editVacancy) {
        res = await updateVacancy(editVacancy._id, formData);
        alert("Vacancy updated successfully!");
        clearEdit();
      } else {
        res = await createVacancy(formData);
        alert("Vacancy added successfully!");
      }

      onVacancyAdded(res.data);
      setVacancy({
        title: "",
        department: "",
        location: "",
        jobType: "Permanent",
        publishedDate: new Date().toISOString().split('T')[0],
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
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {editVacancy ? "📝 Edit Vacancy" : "✨ Add New Vacancy"}
        </h2>
        {editVacancy && (
          <button
            onClick={clearEdit}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-1 md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Job Title</label>
            <input
              type="text"
              name="title"
              value={vacancy.title}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50"
              placeholder="e.g. Registered Nurse"
              required
            />
          </div>

          {/* Department / Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Category</label>
            <input
              type="text"
              name="department"
              value={vacancy.department}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50"
              required
              placeholder="e.g. Nursing"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Location</label>
            <input
              type="text"
              name="location"
              value={vacancy.location}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50"
              required
              placeholder="e.g. Sydney, NSW"
            />
          </div>

          {/* Job Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Job Type</label>
            <div className="relative">
              <select
                name="jobType"
                value={vacancy.jobType}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 appearance-none"
              >
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
                <option value="Contract">Contract</option>
                <option value="Casual">Casual</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                ▼
              </div>
            </div>
          </div>

          {/* Published Date */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Published Date</label>
            <input
              type="date"
              name="publishedDate"
              value={vacancy.publishedDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">Description</label>
          <textarea
            name="description"
            value={vacancy.description}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 min-h-[120px]"
            required
            placeholder="Detailed job description..."
          />
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Requirements <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            name="requirements"
            value={vacancy.requirements}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-gray-50 min-h-[100px]"
            placeholder="List specific requirements..."
          />
        </div>

        {/* Image */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">Cover Image</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:bg-blue-50 transition-all text-center cursor-pointer relative group">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-2">
              <span className="text-4xl block group-hover:scale-110 transition-transform">🖼️</span>
              <span className="text-sm text-gray-500 font-medium">Click to upload or drag & drop</span>
            </div>
          </div>

          {previewUrl && (
            <div className="mt-4 relative group w-fit">
              <img
                src={
                  previewUrl.startsWith?.("blob")
                    ? previewUrl
                    : `${API_URL}${previewUrl}`
                }
                alt="Preview"
                className="h-32 w-auto rounded-lg shadow-md object-cover border border-gray-200"

              />
              <button
                type="button"
                onClick={() => {
                  setVacancy({ ...vacancy, image: null });
                  setPreviewUrl(null);
                  // Reset file input if possible or handle via key
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-4 flex gap-4">
          <button
            type="submit"
            className={`flex-1 py-3.5 px-6 rounded-xl text-white font-bold shadow-lg transform active:scale-95 transition-all ${editVacancy
              ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-200"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-200"
              }`}
          >
            {editVacancy ? "Update Vacancy" : "Publish Vacancy"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;
