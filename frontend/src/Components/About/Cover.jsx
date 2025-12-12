import React from "react";

const Cover = () => {
  return (
    <div className="bg-green-100 py-16 px-6 text-center flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-green-700 mb-6">
        NDIS Support
      </h1>

      {/* Image placeholder */}
      <div className="w-full max-w-md mb-6">
        <img
          src="/innov.jpg"
          alt="NDIS Support"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Description */}
      <p className="max-w-2xl text-gray-700 text-lg leading-relaxed">
        Explore the range of services we provide under the National Disability 
        Insurance Scheme (NDIS) to help you achieve your goals and live a more 
        independent, fulfilling life.
      </p>
    </div>
  );
};

export default Cover;
