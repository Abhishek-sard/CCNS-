import React from "react";
import { Users, ClipboardList, Link, LifeBuoy } from "lucide-react";

const SupportCoordination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          Support Coordination
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Support coordination is a vital service that streamlines access to a range of support options, ensuring individuals receive cohesive and effective care. This scope involves assessing needs, connecting clients with appropriate services, and managing plans to align with personal goals. Coordinators act as advocates, liaising with providers and families to create a seamless support network. This holistic approach ensures that all aspects of an individual’s care are well-integrated and responsive to their evolving needs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
        {[
          {
            icon: <Users className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Personalized Care",
          },
          {
            icon: <ClipboardList className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Needs Assessment",
          },
          {
            icon: <Link className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Service Connection",
          },
          {
            icon: <LifeBuoy className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Ongoing Support",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SupportCoordination;
