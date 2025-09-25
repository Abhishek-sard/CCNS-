import React from "react";
import { FaShieldAlt, FaUserMd, FaCheckCircle, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Trust */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaShieldAlt className="text-5xl text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted & Reliable</h3>
            <p className="text-gray-600 text-sm">
              We are committed to providing dependable services for participants and facilities.
            </p>
          </div>

          {/* Experienced Staff */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaUserMd className="text-5xl text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experienced Staff</h3>
            <p className="text-gray-600 text-sm">
              Our team includes qualified nurses and carers with years of experience.
            </p>
          </div>

          {/* Compliance */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaCheckCircle className="text-5xl text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fully Compliant</h3>
            <p className="text-gray-600 text-sm">
              We adhere to all regulations and industry standards to ensure safety and quality.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <FaClock className="text-5xl text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our team is available round-the-clock to assist participants and facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
