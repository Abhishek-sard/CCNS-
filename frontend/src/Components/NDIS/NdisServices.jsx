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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

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
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 rounded-t-lg shadow-md text-center mb-8">
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

      {/* Success message */}
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 flex items-center">
          <FaCheckCircle className="mr-2" />
          Thank you for your inquiry! We'll contact you within 2 business days.
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

        {/* Contact Details */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-200">
            <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <FaInfoCircle />
            </div>
            <h2 className="text-blue-700 text-xl font-semibold">Contact Information</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-700 w-10 h-10 p-2 bg-blue-100 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-700">Our Location</h4>
                <p>123 Healthcare Avenue<br />Suite 200, Melbourne VIC 3000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-blue-700 w-10 h-10 p-2 bg-blue-100 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-700">Phone Number</h4>
                <p>1300 123 456<br />Mon-Fri: 8:30am - 5:00pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-700 w-10 h-10 p-2 bg-blue-100 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-700">Email Address</h4>
                <p>healthcare@ndisservices.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-blue-700 w-10 h-10 p-2 bg-blue-100 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-700">Business Hours</h4>
                <p>Monday - Friday: 8:30 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM (Admin only)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaUserMd className="text-blue-700 w-10 h-10 p-2 bg-blue-100 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-700">NDIS Registered</h4>
                <p>Fully registered NDIS provider<br />Specializing in healthcare services</p>
              </div>
            </div>

            <div className="h-64 flex items-center justify-center border-2 border-dashed border-blue-700 rounded">
              <FaMapMarkedAlt className="text-blue-700 mr-2" /> Interactive Map Location
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8 border-t border-gray-200 py-5 text-gray-600 text-sm">
        <p>NDIS Healthcare Services &copy; 2023. All rights reserved.</p>
        <div className="flex justify-center gap-5 mt-2">
          <a href="#" className="text-blue-700 hover:underline">Privacy Policy</a>
          <a href="#" className="text-blue-700 hover:underline">Terms of Service</a>
          <a href="#" className="text-blue-700 hover:underline">NDIS Provider Information</a>
          <a href="#" className="text-blue-700 hover:underline">Accessibility</a>
        </div>
      </footer>
    </div>
  );
};

export default NdisServices;
