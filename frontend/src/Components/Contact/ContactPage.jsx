import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", category: "" });
  const [status, setStatus] = useState({ loading: false, msg: null, error: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: null, error: false });

    try {
      const res = await axios.post("http://localhost:5000/api/email/send", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data && res.data.success) {
        setStatus({ loading: false, msg: "✅ Message sent! We'll get back to you soon.", error: false });
        setForm({ name: "", email: "", subject: "", message: "", category: "" });
      } else {
        setStatus({ loading: false, msg: res.data?.message || "❌ Failed to send message", error: true });
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Server error. Try again later.";
      setStatus({ loading: false, msg: message, error: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 mt-19">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Register Now 
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">-- Select Category --</option>
            <option value="Accommodation">Accommodation &  Tenancy</option>
            <option value="Employment">Assist Access / Maintain Employ</option>
            <option value="Personal Activities">Assist Personal Activities High</option>
            <option value="Transition">Assist Life Stage / Transition</option>
            <option value="Assist Personal ">Assist Personal Activities</option>
            <option value="Travel">Assist Travel / Transport</option>
            <option value="Nursing Care">Community Nursing Care</option>
            <option value="Daily Task">Daily Task / Shared Living</option>
            <option value="Community Participation">Involve Community Participation</option>
            <option value="Development life ">Development Life Skills</option>
            <option value="Household task">HouseHold Tasks</option>
            <option value="Participate Community">Participate Community</option>
            <option value="Support coordination">Support Coordination</option>
            <option value="Support Employ">Special Support Employ</option>
            <option value="Group Center">Group Center Activities</option>
          </select>

         
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-md transition 
              ${status.loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {status.msg && (
          <p
            className={`mt-5 text-center font-medium ${
              status.error ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
