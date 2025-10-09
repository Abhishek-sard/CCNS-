import React from "react";
import { Users, Calendar, Handshake, Smile } from "lucide-react";

const ParticipateCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-100 flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4">
          Participate Community
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Community participation support helps individuals connect with and contribute to their local areas through social, recreational, or cultural activities. This scope involves organizing outings, facilitating group events, or providing companionship to encourage engagement. The focus is on building social skills, fostering relationships, and enhancing a sense of belonging. By breaking down isolation, this service enriches lives and strengthens community ties.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
        {[
          {
            icon: <Users className="text-teal-600 w-10 h-10 mb-3" />,
            title: "Social Connections",
          },
          {
            icon: <Calendar className="text-teal-600 w-10 h-10 mb-3" />,
            title: "Organized Outings",
          },
          {
            icon: <Handshake className="text-teal-600 w-10 h-10 mb-3" />,
            title: "Group Events",
          },
          {
            icon: <Smile className="text-teal-600 w-10 h-10 mb-3" />,
            title: "Companionship",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="bg-teal-100 p-4 rounded-full mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <button className="bg-teal-600 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Join the Community
        </button>
      </div>
    </div>
  );
};

export default ParticipateCommunity;
