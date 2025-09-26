import React, { useState } from "react";

const AdminDashboard = () => {
  // State to manage vacancies
  const [vacancies, setVacancies] = useState([
    {
      id: 1,
      title: "Registered Nurse (RN)",
      department: "Healthcare",
      location: "Melbourne, VIC",
      description: "Provide patient care, administer medications, and maintain records.",
    },
    {
      id: 2,
      title: "Personal Care Assistant (PCA)",
      department: "Aged Care",
      location: "Sydney, NSW",
      description: "Assist clients with daily living tasks and provide personal care.",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Vacancy
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update
      setVacancies(
        vacancies.map((vac) =>
          vac.id === editId ? { ...vac, ...formData } : vac
        )
      );
      setEditId(null);
    } else {
      // Add new
      const newVacancy = { id: Date.now(), ...formData };
      setVacancies([...vacancies, newVacancy]);
    }
    setFormData({ title: "", department: "", location: "", description: "" });
  };

  // Delete Vacancy
  const handleDelete = (id) => {
    setVacancies(vacancies.filter((vac) => vac.id !== id));
  };

  // Edit Vacancy
  const handleEdit = (vac) => {
    setFormData({
      title: vac.title,
      department: vac.department,
      location: vac.location,
      description: vac.description,
    });
    setEditId(vac.id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
        Admin Dashboard - Vacancies
      </h1>

      {/* Form */}
      <form
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">
          {editId ? "Edit Vacancy" : "Add New Vacancy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {editId ? "Update Vacancy" : "Add Vacancy"}
        </button>
      </form>

      {/* Vacancy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vacancies.map((job, index) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex"
          >
            {/* Left colored strip */}
            <div
              className={`w-2 rounded-l-lg ${
                index % 2 === 0 ? "bg-blue-700" : "bg-green-600"
              }`}
            ></div>

            {/* Job content */}
            <div className="flex-1 pl-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Department:</span>{" "}
                  {job.department}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Location:</span> {job.location}
                </p>
                <p className="text-gray-700 text-sm">{job.description}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
