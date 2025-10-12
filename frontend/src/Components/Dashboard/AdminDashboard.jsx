import React, { useEffect, useState } from "react";
import VacancyForm from "./VacancyForm";
import { getVacancies, deleteVacancy } from "./VacancyApi";

const AdminDashboard = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getVacancies();
      setVacancies(res.data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
      setError("Failed to load vacancies. Please try again.");
    } finally {
      setLoading(false);
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
    <div className="p-6">
      <VacancyForm onVacancyAdded={handleVacancyAdded} />

      <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-700">All Vacancies</h2>
      
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading vacancies...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
          <button 
            onClick={fetchVacancies}
            className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && vacancies.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No vacancies found. Add your first vacancy above!</p>
        </div>
      )}

      {!loading && !error && vacancies.length > 0 && (
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
      )}
    </div>
  );
};

export default AdminDashboard;
