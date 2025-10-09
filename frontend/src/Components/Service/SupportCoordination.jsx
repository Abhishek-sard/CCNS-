import React from "react";

const SupportCoordination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center justify-start px-6 pt-[200px] pb-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          Household Tasks Support
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Household tasks support ensures that individuals can maintain a clean, safe, and functional living space without undue burden. This registration scope includes assistance with cleaning, laundry, grocery shopping, and minor home maintenance. Tailored to individual needs, these services alleviate physical or time constraints, allowing individuals to focus on their well-being and interests. By keeping homes in order, this support contributes to a stable and comfortable environment.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SupportCoordination;
