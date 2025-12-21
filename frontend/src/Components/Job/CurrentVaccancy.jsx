import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVacancies } from "../Dashboard/VacancyApi";
import { BASE_URL_IMAGE } from "../../services/constants";

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
    <div className="bg-gray-50 min-h-screen pt-24 pb-12 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight">
          Current Vacancies
        </h1>

        {vacancies.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <p className="text-xl text-gray-500 font-medium">No vacancies available at the moment.</p>
            <p className="text-gray-400 mt-2">Please check back later.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            {vacancies.map((job, index) => (
              <div
                key={job._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row group w-full"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-80 h-48 md:h-auto shrink-0 overflow-hidden bg-gray-100">
                  {job.image ? (
                    <img
                      src={`${BASE_URL_IMAGE}/uploads/${job.image}`}
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-sm">No Image</span>
                    </div>
                  )}
                  <div className={`absolute top-0 left-0 md:w-1 md:h-full w-full h-1 ${index % 2 === 0 ? "bg-blue-600" : "bg-teal-500"}`}></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                        {job.title}
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 shrink-0 self-start">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="font-semibold mr-2">Location:</span>
                      <span>{job.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3 mb-6">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex gap-4 md:justify-end mt-auto">
                    <Link to={`/vacancy/${job._id}`}>
                      <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors">
                        Read More
                      </button>
                    </Link>
                    <Link to="/applyonline" state={{ title: job.title }}>
                      <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow transition-all">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentVacancy;
