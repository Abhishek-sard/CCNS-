import React from "react";

const Intro = () => {
  return (
    <section className="bg-gray-100 min-h-[calc(100vh-4.5rem)] flex items-center">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We are a registered NDIS provider and a trusted staffing partner for healthcare organisations.
        </p>

        {/* Mission Statement */}
        <div className="bg-blue-100 shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is simple: to provide <span className="font-medium text-blue-500">person-centred support</span> for individuals with disabilities and to deliver <span className="font-medium text-blue-500">skilled, reliable staff</span> where healthcare facilities need them most.
          </p>
          <p className="text-gray-700 font-semibold text-lg">
            💙 One agency. Two solutions. Endless support.
          </p>
        </div>

      
       
      </div>
    </section>
  );
};

export default Intro;
