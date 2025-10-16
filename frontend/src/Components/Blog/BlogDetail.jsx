import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogApi } from "../../services/blogApi";
import { BASE_URL_IMAGE } from "../../services/constants";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogApi.getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError("Failed to load blog details");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 mt-20 text-lg">{error}</div>
    );

  if (!blog) return <p className="text-center mt-20">Blog not found.</p>;

  return (
    <div className="bg-gray-50 min-h-screen pt-28 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {blog.image && (
          <img
            src={`${BASE_URL_IMAGE}${blog.image}`}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
        )}
        <h1 className="text-3xl font-bold text-blue-800 mb-3">{blog.title}</h1>
        <p className="text-gray-600 text-sm mb-4">
          By {blog.author} | {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-8">
          <Link
            to="/blog"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
