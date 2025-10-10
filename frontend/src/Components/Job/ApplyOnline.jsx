import React, { useState } from "react";

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
      setFileName(files[0]?.name || "");
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("message", formData.message);
      dataToSend.append("resume", formData.resume);

      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: dataToSend,
      });

      const data = await res.json();

      alert(data.message || "Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        message: "",
      });
      setFileName("");
    } catch (err) {
      alert("Error submitting form!");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          Start Your Career Journey
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Apply Online
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join our team of healthcare professionals and make a difference in people's lives
        </p>
      </div>

      {/* Main Form Container */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Side */}
          <div className="lg:w-2/3">
            <form
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 bg-white/50 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      👤
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 bg-white/50 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ✉️
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 bg-white/50 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                      placeholder="+61 XXX XXX XXX"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      📞
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Upload Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-between w-full border-2 border-dashed border-gray-300 bg-white/50 p-4 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                    >
                      <span className="text-gray-600 truncate">
                        {fileName || "Choose file (PDF, DOC, DOCX)"}
                      </span>
                      <div className="text-blue-500 text-lg">📎</div>
                    </label>
                    {fileName && (
                      <div className="text-green-600 text-sm mt-2 flex items-center gap-2">
                        <span>✅</span>
                        File selected: {fileName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2 mb-8">
                <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Cover Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full border border-gray-200 bg-white/50 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                    placeholder="Tell us why you're interested in joining our team..."
                  />
                  <div className="absolute right-4 top-4 text-gray-400">
                    💬
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit Application
                    <span className="text-xl">🚀</span>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span>💼</span>
                Why Join Us?
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "🌟",
                    title: "Professional Growth",
                    desc: "Continuous learning and career advancement opportunities"
                  },
                  {
                    icon: "💝",
                    title: "Make a Difference",
                    desc: "Impact lives through compassionate healthcare services"
                  },
                  {
                    icon: "⚡",
                    title: "Quick Response",
                    desc: "We review applications within 48 hours"
                  },
                  {
                    icon: "🛡️",
                    title: "Supportive Environment",
                    desc: "Work with a team that values collaboration and respect"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-blue-500">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <span>📞</span>
                  Need Help?
                </h4>
                <p className="text-blue-100 text-sm">
                  Contact our HR team at{" "}
                  <a href="mailto:careers@ccnaagency.com" className="text-white underline">
                    careers@ccnaagency.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyOnline;