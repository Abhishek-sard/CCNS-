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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Submitted Form Details</h1>

      <div className="overflow-x-auto">
        <table className="w-full border shadow text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th>Participant Name</th>
              <th>Address</th>
              <th>Suburb</th>
              <th>State</th>
              <th>Birthday</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Interest</th>
              <th>Accommodation</th>
              <th>NDIS Number</th>
              <th>Plan Dates</th>
              <th>Plan Managed</th>
              <th>Disability</th>
              <th>Hours</th>
              <th>Goals</th>
              <th>Referral Name</th>
              <th>Company</th>
              <th>Referral Email</th>
              <th>Referral Phone</th>
              <th>File</th>
            </tr>
          </thead>

          <tbody>
            {forms.length === 0 ? (
              <tr>
                <td colSpan="20" className="text-center text-gray-500 p-4">
                  No forms submitted yet.
                </td>
              </tr>
            ) : (
              forms.map((f) => (
                <tr key={f._id} className="hover:bg-gray-100">
                  <td>{f.participantName}</td>
                  <td>{f.address}</td>
                  <td>{f.suburb}</td>
                  <td>{f.state}</td>
                  <td>{f.birthday}</td>
                  <td>{f.contactNumber}</td>
                  <td>{f.email}</td>
                  <td>{f.hobbies}</td>
                  <td>{f.accommodation}</td>
                  <td>{f.ndisNumber}</td>
                  <td>{f.planDates}</td>
                  <td>{f.planManaged}</td>
                  <td>{f.primaryDisability}</td>
                  <td>{f.allocatedHours}</td>
                  <td>{f.goals}</td>
                  <td>{f.referralName}</td>
                  <td>{f.referralCompany}</td>
                  <td>{f.referralEmail}</td>
                  <td>{f.referralPhone}</td>
                  <td>
                    {f.uploadedFile ? (
                      <a href={`http://localhost:5000/uploads/${f.uploadedFile}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                        View File
                      </a>
                    ) : (
                      "No file"
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
