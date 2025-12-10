import React, { useState } from "react";
import axios from "axios";

const NdisContact = () => {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (file) data.append("file", file);

    await axios.post("http://localhost:5000/api/form/submit", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mb-60">
      <h1 className="text-2xl font-bold mb-4 text-center">Client Information</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Participant Name */}
        <div>
          <label className="block font-semibold mb-1">Participant Name*</label>
          <input
            type="text"
            name="participantName"
            onChange={handleChange}
            placeholder="Enter Participant's Name"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Address*</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Enter your Address"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Suburb */}
        <div>
          <label className="block font-semibold mb-1">Suburb*</label>
          <input
            type="text"
            name="suburb"
            onChange={handleChange}
            placeholder="*****"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* State */}
        <div>
          <label className="block font-semibold mb-1">State*</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            placeholder="****"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Birthday */}
        <div>
          <label className="block font-semibold mb-1">Birthday*</label>
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block font-semibold mb-1">Best Contact Number*</label>
          <input
            type="number"
            name="contactNumber"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Email Address"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Interest */}
        <div>
          <label className="block font-semibold mb-1">Client Interest / Hobbies</label>
          <input
            type="text"
            name="interest"
            onChange={handleChange}
            placeholder="Enter your interest"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* SDA / SIL */}
        <div>
          <label className="block font-semibold mb-1">
            SDA or SIL Accommodation Required?*
          </label>
          <input
            type="text"
            name="accommodation"
            onChange={handleChange}
            placeholder="Please describe"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* NDIS Section */}
        <h1 className="text-xl font-bold underline pt-6">NDIS Plan Details</h1>

        <div>
          <label className="block font-semibold mb-1">NDIS Number*</label>
          <input
            type="text"
            name="ndisNumber"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Plan Dates*</label>
          <input
            type="text"
            name="planDates"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label className="font-semibold block mb-2">
            How is this NDIS plan managed?
          </label>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="management"
                value="Self-managed"
                onChange={handleChange}
              />
              Self-managed
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="management"
                value="Plan-managed"
                onChange={handleChange}
              />
              Plan-managed
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="management"
                value="Agency managed"
                onChange={handleChange}
              />
              Agency managed
            </label>
          </div>
        </div>

        {/* Primary Disability */}
        <div>
          <label className="block font-semibold mb-1">Primary Disability*</label>
          <input
            type="text"
            name="disability"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Hours */}
        <div>
          <label className="block font-semibold mb-1">Allocated Hour of Funding*</label>
          <input
            type="text"
            name="hours"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* NDIS Goals */}
        <div>
          <label className="block font-semibold mb-1">NDIS Goals</label>
          <input
            type="text"
            name="goals"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Referral Details */}
        <h1 className="text-xl font-bold pt-6">Referral Details</h1>

        <div>
          <label className="block font-semibold mb-1">Full Name*</label>
          <input
            type="text"
            name="refName"
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address*</label>
          <input
            type="email"
            name="refEmail"
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone Number*</label>
          <input
            type="number"
            name="refPhone"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-semibold mb-1">
            Attach NDIS Plan / Reports
          </label>
          <input type="file" onChange={handleFile} className="w-full" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NdisContact;