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
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (file) data.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/forms/submit", data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl  ">
      <h1 className="text-2xl font-bold mb-4 text-center mt-20">Participate referral form</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Participant Info */}
        <input type="text" name="participantName" onChange={handleChange} placeholder="Participant Name*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="address" onChange={handleChange} placeholder="Address*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="suburb" onChange={handleChange} placeholder="Suburb*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="state" onChange={handleChange} placeholder="State*" className="w-full border p-2 rounded-lg" />
        <input type="date" name="birthday" onChange={handleChange} className="w-full border p-2 rounded-lg" />
        <input type="number" name="contactNumber" onChange={handleChange} placeholder="Contact Number*" className="w-full border p-2 rounded-lg" />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded-lg" />
        <input type="text" name="hobbies" onChange={handleChange} placeholder="Interest / Hobbies" className="w-full border p-2 rounded-lg" />
        <input type="text" name="accommodation" onChange={handleChange} placeholder="SDA/SIL Accommodation" className="w-full border p-2 rounded-lg" />

        {/* NDIS Info */}
        <h2 className="font-bold text-xl pt-4">NDIS Plan Details</h2>
        <input type="text" name="ndisNumber" onChange={handleChange} placeholder="NDIS Number*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="planDates" onChange={handleChange} placeholder="Plan Dates*" className="w-full border p-2 rounded-lg" />
        
        <div>
          <label>Plan Managed*</label>
          <select name="planManaged" onChange={handleChange} className="w-full border p-2 rounded-lg">
            <option value="">Select</option>
            <option value="Self-managed">Self-managed</option>
            <option value="Plan-managed">Plan-managed</option>
            <option value="Agency managed">Agency managed</option>
          </select>
        </div>

        <input type="text" name="primaryDisability" onChange={handleChange} placeholder="Primary Disability*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="allocatedHours" onChange={handleChange} placeholder="Allocated Hours*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="goals" onChange={handleChange} placeholder="NDIS Goals" className="w-full border p-2 rounded-lg" />

        {/* Referral Info */}
        <h2 className="font-bold text-xl pt-4">Referral Details</h2>
        <input type="text" name="referralName" onChange={handleChange} placeholder="Referral Name*" className="w-full border p-2 rounded-lg" />
        <input type="text" name="referralCompany" onChange={handleChange} placeholder="Company" className="w-full border p-2 rounded-lg" />
        <input type="email" name="referralEmail" onChange={handleChange} placeholder="Referral Email*" className="w-full border p-2 rounded-lg" />
        <input type="number" name="referralPhone" onChange={handleChange} placeholder="Referral Phone*" className="w-full border p-2 rounded-lg" />

        <input type="file" onChange={handleFile} className="w-full" />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NdisContact;
