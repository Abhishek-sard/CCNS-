import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogApi } from "../../services/blogApi";
import { BASE_URL_IMAGE } from "../../services/constants";
import { FaArrowRight } from "react-icons/fa";

/* ===================== BLOG CARD ===================== */
const BlogCard = ({ blog }) => {
  const snippet =
    blog?.description && blog.description.length > 100
      ? blog.description.substring(0, 100) + "..."
      : blog?.description || "No description available.";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300 w-80 border-l-4 border-blue-600 flex flex-col">

      {/* Image */}
      {blog.image && (
        <img
          src={`${BASE_URL_IMAGE}${blog.image}`}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}

      {/* Title (Clickable) */}
      <Link to={`/blog/${blog._id}`}>
        <h3 className="text-lg font-bold text-blue-700 mb-2 hover:underline cursor-pointer">
          {blog.title}
        </h3>
      </Link>

      {/* Author */}
      <p className="text-gray-600 text-xs mb-2">
        By {blog.author}
      </p>

      {/* Description */}
      <p className="text-gray-700 text-sm flex-grow">
        {snippet}
      </p>

      {/* Date */}
      <p className="text-gray-500 text-xs mt-2">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      {/* Read More Button (INSIDE CARD) */}
      <Link
        to={`/blog/${blog._id}`}
        className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition"
      >
        Read More
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
};

/* ===================== BLOG PAGE ===================== */
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await blogApi.getBlogs();
      setBlogs(data);
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
          <button
            onClick={fetchBlogs}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-28 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        CCNA Blog
      </h1>

      {blogs.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg">No blogs available yet.</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center">
          {blogs.map((blog) => (
            <div key={blog._id} className="flex flex-col items-center gap-4">

              {/* Blog Card */}
              <BlogCard blog={blog} />

              {/* Extra Buttons */}
              <div className="flex gap-5 mt-5 mb-10">
                <Link
                  to="/ndiscover"
                  className="flex items-center gap-2 border border-blue-600 bg-blue-700 text-white hover:bg-blue-500 px-5 py-2 rounded text-sm font-semibold transition"
                >
                  NDIS Care
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  to="/staffing"
                  className="flex items-center gap-2 border border-blue-600 bg-blue-700 text-white hover:bg-blue-500 px-5 py-2 rounded text-sm font-semibold transition"
                >
                  Staffing
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
