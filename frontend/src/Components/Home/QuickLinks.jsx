import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaUserNurse } from "react-icons/fa"; // Icons from react-icons

const QuickLinks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* NDIS Services Card */}
          <Link
            to="/NdisServices"
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-lg p-8 text-center"
          >
            <FaHospital className="text-6xl text-blue-700 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700">
              NDIS Services
            </h3>
            <p className="text-gray-700 mb-4">
              Assistance, support, and independence for NDIS participants to live fulfilling lives.
            </p>
            <span className="text-blue-700 font-semibold hover:underline">
              Learn More →
            </span>
          </Link>

          {/* Staffing Solutions Card */}
          <Link
            to="/Staffing"
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-lg p-8 text-center"
          >
            <FaUserNurse className="text-6xl text-blue-700 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700">
              Staffing Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Trusted nurses, carers, and healthcare staff for facilities across Australia.
            </p>
            <span className="text-blue-700 font-semibold hover:underline">
              Learn More →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
