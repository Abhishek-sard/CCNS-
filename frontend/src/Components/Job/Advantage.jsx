import React from "react";
import { FaAward, FaBook, FaShieldAlt, FaUsers, FaCertificate } from "react-icons/fa";

const benefitsData = [
  {
    title: "Competitive Salary & Benefits",
    description: "We offer attractive compensation packages to reward your skills and dedication.",
    icon: <FaAward className="text-yellow-400 text-3xl" />,
    color: "bg-blue-50",
  },
  {
    title: "Compliance with Healthcare Standards",
    description: "Our agency strictly follows healthcare compliance and safety regulations.",
    icon: <FaShieldAlt className="text-green-400 text-3xl" />,
    color: "bg-green-50",
  },
  {
    title: "Training & Certification Opportunities",
    description: "Get access to professional training and certification programs to grow your career.",
    icon: <FaBook className="text-purple-400 text-3xl" />,
    color: "bg-purple-50",
  },
  {
    title: "Supportive Work Environment",
    description: "Work in a collaborative and inclusive environment that values your contributions.",
    icon: <FaUsers className="text-pink-400 text-3xl" />,
    color: "bg-pink-50",
  },
  {
    title: "Professional Recognition",
    description: "Receive recognition for your achievements and professional excellence.",
    icon: <FaCertificate className="text-yellow-500 text-3xl" />,
    color: "bg-yellow-50",
  },
];

const Advantage = () => {
  return (
    <section className="py-20 bg-gray-100 ">
      <div className="container mx-auto px-6 max-w-6xl mt-19">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Working with CCNA Agency</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our agency and enjoy a rewarding healthcare career. We provide the right support, training, and benefits to help you succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg transition transform hover:-translate-y-3 hover:shadow-2xl ${benefit.color}`}
            >
              <div className="flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
