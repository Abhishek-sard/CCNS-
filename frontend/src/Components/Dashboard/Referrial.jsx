import React, { useEffect, useState } from "react";
import axios from "axios";

const Referrial = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/forms/all");
        setForms(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForms();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Submitted Form Details
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-600 text-white sticky top-0">
            <tr>
              <th className="p-3">Participant Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Suburb</th>
              <th className="p-3">State</th>
              <th className="p-3">Birthday</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Interest</th>
              <th className="p-3">Accommodation</th>
              <th className="p-3">NDIS Number</th>
              <th className="p-3">Plan Dates</th>
              <th className="p-3">Plan Managed</th>
              <th className="p-3">Disability</th>
              <th className="p-3">Hours</th>
              <th className="p-3">Goals</th>
              <th className="p-3">Referral Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Referral Email</th>
              <th className="p-3">Referral Phone</th>
              <th className="p-3">File</th>
            </tr>
          </thead>

          <tbody>
            {forms.length === 0 ? (
              <tr>
                <td colSpan="20" className="text-center p-6 text-gray-500 italic">
                  No forms submitted yet.
                </td>
              </tr>
            ) : (
              forms.map((f, idx) => (
                <tr
                  key={f._id}
                  className={`hover:bg-blue-50 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="p-3">{f.participantName}</td>
                  <td className="p-3">{f.address}</td>
                  <td className="p-3">{f.suburb}</td>
                  <td className="p-3">{f.state}</td>
                  <td className="p-3">{f.birthday}</td>
                  <td className="p-3">{f.contactNumber}</td>
                  <td className="p-3">{f.email}</td>
                  <td className="p-3">{f.interest}</td>
                  <td className="p-3">{f.accommodation}</td>
                  <td className="p-3">{f.ndisNumber}</td>
                  <td className="p-3">{f.planDates}</td>
                  <td className="p-3">{f.management}</td>
                  <td className="p-3">{f.disability}</td>
                  <td className="p-3">{f.hours}</td>
                  <td className="p-3">{f.goals}</td>
                  <td className="p-3">{f.refName}</td>
                  <td className="p-3">{f.company}</td>
                  <td className="p-3">{f.refEmail}</td>
                  <td className="p-3">{f.refPhone}</td>
                  <td className="p-3 text-blue-600">
                    {f.uploadedFile ? (
                      <a
                        href={`http://localhost:5000/uploads/${f.uploadedFile}`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-blue-800"
                      >
                        View File
                      </a>
                    ) : (
                      <span className="text-gray-400">No file</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Referrial;
