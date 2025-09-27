import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
        setStatus({ loading: false, msg: "Message sent! We'll get back to you soon.", error: false });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, msg: res.data?.message || "Failed to send message", error: true });
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Server error. Try again later.";
      setStatus({ loading: false, msg: message, error: true });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            name="subject"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={handleChange}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button type="submit" disabled={status.loading} style={{ padding: "10px 16px" }}>
          {status.loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status.msg && (
        <div style={{ marginTop: 12, color: status.error ? "red" : "green" }}>
          {status.msg}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
