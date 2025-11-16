import React, { useState } from "react";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaCalendarAlt, FaComments, FaClock, FaUsers, FaCheckCircle, FaHandHoldingHeart, FaShieldAlt, FaStar, FaHeart } from "react-icons/fa";
import { staffingApi } from "../../services/staffingApi";

const Staffing = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    staffingNeeds: [],
    requiredDate: "",
    contactMethod: "",
    contactDateTime: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        staffingNeeds: checked
          ? [...prev.staffingNeeds, value]
          : prev.staffingNeeds.filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "phone", "requiredDate", "contactMethod", "contactDateTime", "description"];
    const isValid = requiredFields.every((field) => formData[field]) && formData.staffingNeeds.length > 0;

    if (!isValid) {
      alert("Please fill in all required fields and select at least one staffing need.");
      return;
    }

    try {
      await staffingApi.create(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert(err?.message || "Failed to submit staffing request. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-6">
        <div className="bg-black p-12 rounded-3xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-300 hover:scale-105">
          <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-green-700 mb-4">Request Submitted Successfully!</h2>
          <p className="text-gray-600 text-lg mb-6">Thank you for your staffing request. We'll contact you within 24 hours.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-40">
      {/* Top Section - Content */}
      <section className="relative text-white">
        {/* Background Image Section */}
        <h1 className="text-4xl text-center font-extrabold mb-12 text-black drop-shadow-md">
          Comprehensive Staffing Solutions for Aged Care and Disability Services
        </h1>
        <div
          className="bg-cover bg-center bg-no-repeat py-24 px-6 h-96"
          style={{ backgroundImage: "url('./group.jpg')" }}
        >
          <div className="relative z-10 max-w-5xl mx-auto text-center">

          </div>
        </div>

        {/* Main Text Section */}
        <div className="bg-white text-gray-800 py-16 px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Advance Care  is committed to delivering staffing solutions that meet the unique needs
              of each of our clients. Our team of professionals is dedicated to providing quality care and
              support, ensuring a positive and fulfilling experience for everyone involved.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-emerald-700 bg-emerald-50 p-4 rounded-xl shadow-sm">
                  Staffing Solution - Your Perfect Care Team Starts Here
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  At Advance Care , we understand the importance of staffing solutions when it comes to
                  providing quality care services. That's why we offer a range of staffing solutions tailored to
                  meet our client's unique needs.
                </p>

                <h2 className="text-3xl font-bold text-emerald-700 bg-emerald-50 p-4 rounded-xl shadow-sm mt-8">
                  The Right People for the Right Care
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our professionals include a diverse range of individuals with various skills and qualifications.
                  We have a team of Nurses, including Assistants in Nursing (AIN), Registered Nurses (RN),
                  Enrolled Nurses (EN), Child Care Educators, and Endorsed Enrolled Nurses (EEN).
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Team Includes:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Personal Carers
                      </li>
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Resident Care Escorts
                      </li>
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Child Care Educators
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Registered Nurses (RN)
                      </li>
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Enrolled Nurses (EN)
                      </li>
                      <li className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Assistant in Nursing (AIN)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-200">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-3">What sets us apart?</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our proactive recruiters use a vast pool of applicant databases to find and screen the most
                    suitable candidates. We prioritize being resourceful, approachable, and supportive.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 rounded-2xl shadow-lg mt-12">
              <h2 className="text-3xl font-bold text-white mb-4">Need Care Staff in Australia?</h2>
              <p className="text-lg leading-relaxed text-white">
                If you're looking for a staffing solution that delivers results, look no further than Advance Care
                . Let us help you find the right staff by submitting your job information. With 24-hour
                assistance, you can rest assured you're taken care of.
              </p>
              <div className="mt-6">
                <p className="font-bold text-white text-xl">Need assistance or service advice?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Form */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-100 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-violet-400 text-white py-6 px-10 rounded-3xl shadow-2xl inline-flex items-center gap-4">
              <FaUsers className="text-3xl" />
              <h1 className="text-3xl font-bold">Staffing Form</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold text-gray-700 block mb-3 text-lg">Full Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-violet-500 text-xl" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                    placeholder="John Smith"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-3 text-lg">Company</label>
                <div className="relative">
                  <FaBuilding className="absolute left-4 top-4 text-violet-500 text-xl" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                    placeholder="Your organization"
                  />
                </div>
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold text-gray-700 block mb-3 text-lg">Email Address *</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-violet-500 text-xl" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-3 text-lg">Phone Number *</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-4 text-violet-500 text-xl" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                    placeholder="+61 XXX XXX XXX"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Staffing Needs */}
            <div>
              <label className="font-semibold text-gray-700 block mb-4 text-lg">Staffing Needs *</label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Temporary", "Permanent", "Contract", "Executive", "Specialized", "Seasonal"].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center gap-3 p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 text-lg bg-white ${formData.staffingNeeds.includes(type.toLowerCase())
                      ? 'border-violet-500 bg-violet-50 shadow-md'
                      : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'
                      }`}
                  >
                    <input
                      type="checkbox"
                      name="staffingNeeds"
                      value={type.toLowerCase()}
                      checked={formData.staffingNeeds.includes(type.toLowerCase())}
                      onChange={handleChange}
                      className="w-5 h-5 text-violet-600 focus:ring-violet-500"
                    />
                    <span className="font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Required */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3 text-lg">Date Staff Required *</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-4 text-violet-500 text-xl" />
                <input
                  type="date"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                  required
                />
              </div>
            </div>

            {/* Contact Method */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3 text-lg">Preferred Contact Method *</label>
              <div className="relative">
                <FaComments className="absolute left-4 top-4 text-violet-500 text-xl" />
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg appearance-none bg-white"
                  required
                >
                  <option value="">Select a method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="video">Video Conference</option>
                  <option value="in-person">In-Person Meeting</option>
                </select>
              </div>
            </div>

            {/* Contact Date & Time */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3 text-lg">Preferred Contact Date & Time *</label>
              <div className="relative">
                <FaClock className="absolute left-4 top-4 text-violet-500 text-xl" />
                <input
                  type="datetime-local"
                  name="contactDateTime"
                  value={formData.contactDateTime}
                  onChange={handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 text-lg bg-white"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold text-gray-700 block mb-3 text-lg">Description of Needs *</label>
              <textarea
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all duration-300 resize-none text-lg bg-white"
                placeholder="Please describe your staffing requirements, including:
• Required skills and qualifications
• Duration of employment
• Specific responsibilities
• Any special requirements..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaCheckCircle className="text-xl" />
              Submit Staffing Request
            </button>
          </form>
        </div>
      </section>
    </div>

  );
};

export default Staffing;