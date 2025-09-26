import React, { useEffect, useState } from "react";
import VacancyForm from "./VacancyForm";
import { getVacancies, deleteVacancy } from "./VacancyApi";

const AdminDashboard = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const res = await getVacancies();
      setVacancies(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVacancyAdded = (newVacancy) => {
    setVacancies([...vacancies, newVacancy]);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vacancy?")) {
      await deleteVacancy(id);
      setVacancies(vacancies.filter(v => v._id !== id));
    }
  };

  return (
    <div className="pt-28 px-6 md:px-20">
      <VacancyForm onVacancyAdded={handleVacancyAdded} />

      <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-700">All Vacancies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vacancies.map((job) => (
          <div key={job._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
            <p><span className="font-semibold">Department:</span> {job.department}</p>
            <p><span className="font-semibold">Location:</span> {job.location}</p>
            <p>{job.description}</p>
            {job.requirements && <p><span className="font-semibold">Requirements:</span> {job.requirements}</p>}

            <button
              onClick={() => handleDelete(job._id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
