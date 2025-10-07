import React, { useState } from "react";
import axios from "axios";

const AdminBlogUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("description", formData.description);
    data.append("content", formData.content);
    if (image) data.append("image", image);

    try {
      // <-- Do NOT set Content-Type manually when sending FormData
      const res = await axios.post("http://localhost:5000/blogs", data);
      console.log("response:", res);
      setMessage("✅ Blog created successfully!");
      setFormData({ title: "", author: "", description: "", content: "" });
      setImage(null);
      // reset file input visually if needed (you may keep a ref to clear it)
    } catch (err) {
      console.error("Upload error:", err);
      // show more helpful message if server responded
      if (err.response && err.response.data) {
        setMessage(`❌ Error: ${err.response.data.error || err.response.data.message || "Server error"}`);
      } else {
        setMessage("❌ Network or CORS error (check console & network tab)");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Admin Blog Upload
        </h1>

        {message && (
          <div
            className={`text-center mb-4 font-semibold ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows="2"
            required
          />
          <textarea
            name="content"
            placeholder="Full Content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows="5"
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border p-2 rounded-lg"
            accept="image/*"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold"
          >
            Upload Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlogUpload;
