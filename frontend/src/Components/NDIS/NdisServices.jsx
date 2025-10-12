import React, { useState } from "react";
import {
  FaHandHoldingHeart,
  FaFileMedical,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { BASE_URL } from "../../services/constants";

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
      const response = await fetch(`${BASE_URL}/enquiry/send-agency-enquiry`, {
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
              Contact us for personalized healthcare support under the National
              Disability Insurance Scheme
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

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-200">
            <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <FaFileMedical />
            </div>
            <h2 className="text-blue-700 text-xl font-semibold">
              Healthcare Inquiry Form
            </h2>
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
                <option value="supportCoordination">
                  Support Coordination
                </option>
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
                Healthcare Needs Description{" "}
                <span className="text-red-600">*</span>
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
              <label>
                I agree to the privacy policy and consent to being contacted
                regarding NDIS services
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold mt-2"
            >
              Submit Healthcare Inquiry
            </button>
          </form>
        </div>

        {/* Right Side: CCNA Details & Map */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-green-700">CCNA Agency</h3>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" /> 0421 079 928
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-600 text-3xl" />{" "}
              info@ccnaagency.com
            </p>
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-600 text-3xl mt-1" />
              Suite 616, Level 6, <br />
              368 Sussex St, Sydney, NSW 2000
            </p>
            <p className="flex items-center gap-3 text-2xl">
              <FaClock className="text-green-600" /> Mon - Fri: 9:00 AM – 6:00
              PM
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/CCNASouthAustralia/"
                target="_blank"
                className="text-blue-700 hover:text-blue-900 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/ccnasa-679912282/"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/0421079928"
                target="_blank"
                className="text-green-600 hover:text-green-800 text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=368+Sussex+St,+Sydney,+NSW+2000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md font-semibold transition"
            >
              ➡️ Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="CCNA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.808943522107!2d151.20344357613655!3d-33.87721002041602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3b6bdb4d0d%3A0x3b6e66e3d52e5f8!2s368%20Sussex%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1695975086741!5m2!1sen!2sau"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NdisServices;
