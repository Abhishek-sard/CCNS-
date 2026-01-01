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

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Card 1 */}
          <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
              🛡️
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">
                NDIS Registered Provider
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Fully accredited and compliant
              </p>

              <Link
                to="/ndisCover"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">
              👥
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">
                Staffing Solution
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Trusted by healthcare facilities
              </p>

              <Link
                to="/staffing"
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-800 transition"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
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
