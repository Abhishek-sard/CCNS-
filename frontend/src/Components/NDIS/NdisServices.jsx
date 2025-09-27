import React, { useState } from "react";
import { FaHandHoldingHeart, FaFileMedical, FaInfoCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUserMd, FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";

const NdisServices = () => {
  const [formData, setFormData] = useState({
    participantName: "",
    ndisNumber: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredContact: "",
    message: "",
    privacy: false,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        window.scrollTo(0, 0);

        setTimeout(() => {
          setFormData({
            participantName: "",
            ndisNumber: "",
            email: "",
            phone: "",
            serviceType: "",
            preferredContact: "",
            message: "",
            privacy: false,
          });
          setSuccess(false);
        }, 5000);
      } else {
        setError(data.message || "Failed to send inquiry.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 rounded-t-lg shadow-md text-center mb-8 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          <div className="bg-white text-blue-700 w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4 md:mb-0 md:mr-4">
            <FaHandHoldingHeart size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">NDIS Healthcare Services</h1>
            <p className="text-base opacity-90 max-w-xl mx-auto">
              Contact us for personalized healthcare support under the National Disability Insurance Scheme
            </p>
          </div>
        </div>
      </header>

      {/* Success & Error messages */}
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 flex items-center">
          <FaCheckCircle className="mr-2" />
          Thank you for your inquiry! We'll contact you within 2 business days.
        </div>
      )}
      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6 flex items-center">
          <FaCheckCircle className="mr-2" />
          {error}
        </div>
      )}

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-200">
            <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <FaFileMedical />
            </div>
            <h2 className="text-blue-700 text-xl font-semibold">Healthcare Inquiry Form</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Participant Name */}
            <div>
              <label className="font-semibold text-gray-700">
                Participant Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="participantName"
                value={formData.participantName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* NDIS Number */}
            <div>
              <label className="font-semibold text-gray-700">NDIS Number</label>
              <input
                type="text"
                name="ndisNumber"
                value={formData.ndisNumber}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold text-gray-700">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-semibold text-gray-700">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="font-semibold text-gray-700">
                Type of Service Needed <span className="text-red-600">*</span>
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                <option value="">Select a service</option>
                <option value="nursing">Nursing Care</option>
                <option value="therapy">Therapy Services</option>
                <option value="personalCare">Personal Care</option>
                <option value="supportCoordination">Support Coordination</option>
                <option value="other">Other Healthcare Service</option>
              </select>
            </div>

            {/* Preferred Contact */}
            <div>
              <label className="font-semibold text-gray-700">
                Preferred Contact Method <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center gap-4 mt-1">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleChange}
                    required
                  />
                  Phone
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleChange}
                    required
                  />
                  Email
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-semibold text-gray-700">
                Healthcare Needs Description <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe the healthcare services you require..."
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              ></textarea>
            </div>

            {/* Privacy */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
              <label>I agree to the privacy policy and consent to being contacted regarding NDIS services</label>
            </div>

            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold mt-2">
              Submit Healthcare Inquiry
            </button>
          </form>
        </div>

        {/* Contact Details (unchanged) */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          {/* ... Your existing contact details JSX ... */}
        </div>
      </div>
    </div>
  );
};

export default NdisServices;
