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
            {vacancies.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row group w-full"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-64 h-40 md:h-auto shrink-0 overflow-hidden bg-gray-100">
                  {job.image ? (
                    <img
                      src={`${BASE_URL_IMAGE}/uploads/${job.image}`}
                      alt={job.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                      <span className="text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    <div className="flex-1">
                      {/* Title Link */}
                      <Link to={`/vacancy/${job._id}`} className="block">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">
                          {job.title}
                        </h2>
                      </Link>

                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-gray-600">
                        {/* Category */}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {job.department}
                        </span>

                        {/* Location */}
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Location:</span>
                          {job.location}
                        </div>

                        {/* Job Type */}
                        <div className="flex items-center">
                          <span className="font-medium mr-1">Type:</span>
                          {job.jobType || "Permanent"}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0">
                      <Link to="/applyonline" state={{ title: job.title }}>
                        <button className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow transition-all whitespace-nowrap">
                          Apply Now
                        </button>
                      </Link>
                    </div>

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
