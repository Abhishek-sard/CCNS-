import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getVacancyById, getVacancies } from "../Dashboard/VacancyApi";
import { BASE_URL_IMAGE } from "../../services/constants";

const VacancyDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getVacancyById(id);
        setJob(data);
        setError(null);
      } catch (e) {
        // Fallback: fetch all and find by id
        try {
          const res = await getVacancies();
          const found = (res?.data || []).find(v => String(v._id) === String(id));
          if (found) {
            setJob(found);
            setError(null);
          } else {
            setError("Failed to load vacancy");
          }
        } catch {
          setError("Failed to load vacancy");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="pt-28 px-6 md:px-20">Loading...</div>;
  if (error) return <div className="pt-28 px-6 md:px-20 text-red-600">{error}</div>;
  if (!job) return null;

  return (
    <div className="bg-gray-50 min-h-screen pt-28 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        {job.image && (
          <img
            src={`${BASE_URL_IMAGE}/uploads/${job.image}`}
            alt={job.title}
            className="w-full h-72 object-cover rounded mb-6 border"
          />
        )}
        <h1 className="text-3xl font-extrabold text-blue-800 mb-2">{job.title}</h1>
        <p className="text-gray-700"><span className="font-semibold">Department:</span> {job.department}</p>
        <p className="text-gray-700 mb-4"><span className="font-semibold">Location:</span> {job.location}</p>
        <div className="prose max-w-none">
          <h2 className="text-xl font-bold mt-4">Description</h2>
          <p className="whitespace-pre-line">{job.description}</p>
          {job.requirements && (
            <>
              <h2 className="text-xl font-bold mt-4">Requirements</h2>
              <p className="whitespace-pre-line">{job.requirements}</p>
            </>
          )}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Link to="/applyonline" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Apply Now</Link>
          <Link to="/currentvaccancy" className="text-blue-700 hover:underline">Back to Vacancies</Link>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetails;


