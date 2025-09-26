import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVacancies } from "../Dashboard/VacancyApi";

const CurrentVacancy = () => {
  const [vacancies, setVacancies] = useState([]);

  // Fetch vacancies from backend
  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const res = await getVacancies();
      setVacancies(res.data);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-28 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Current Vacancies
      </h1>

      {vacancies.length === 0 ? (
        <p className="text-center text-gray-500">No vacancies available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((job, index) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex"
            >
              {/* Left colored strip */}
              <div
                className={`w-2 rounded-l-lg ${index % 2 === 0 ? "bg-blue-700" : "bg-green-600"}`}
              ></div>

              {/* Job content */}
              <div className="flex-1 pl-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-blue-700 mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Department:</span> {job.department}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-700 text-sm">{job.description}</p>
                  {job.requirements && (
                    <p className="text-gray-700 text-sm mt-1">
                      <span className="font-semibold">Requirements:</span> {job.requirements}
                    </p>
                  )}
                </div>

                <Link to="/applyonline">
                  <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentVacancy;
