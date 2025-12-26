import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SupportCoordination = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="/household.jpg"
          alt="Household Tasks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 to-indigo-800/40"></div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
          >
            Household Tasks Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto font-light"
          >
            Helping you maintain comfort, cleanliness, and independence every day.
          </motion.p>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
          Empowering Everyday Living
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Household tasks support ensures that individuals can maintain a clean,
          safe, and functional living space without undue burden. We assist with
          cleaning, laundry, grocery shopping, and minor home maintenance —
          allowing you to focus on your well-being and interests.
        </p>

        {/* Image in Middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <img
            src="/householdtasksupp.jpg"
            alt="Household Support"
            className="rounded-3xl shadow-2xl w-full md:w-2/4 lg:w-1/3 object-cover"
          />
        </motion.div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {[
            {
              title: "Cleaning & Maintenance",
              desc: "Professional cleaning and light maintenance to keep your living space neat and functional.",
              icon: "🧹",
            },
            {
              title: "Laundry & Organization",
              desc: "We handle laundry and organization so your home always feels fresh and tidy.",
              icon: "🧺",
            },
            {
              title: "Grocery & Essentials",
              desc: "We assist with grocery shopping and restocking essentials — your home, always ready.",
              icon: "🛒",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-indigo-100 transition-transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}

      </div>

      <div className="flex justify-center mt-4">
        <Link
          to="/ndis"
          className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 mb-5 "
        >
          Contact Us <FaArrowRight />
        </Link>
      </div>

    </div>
  );
};

export default SupportCoordination;
