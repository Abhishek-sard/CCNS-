import React from "react";

const AssistPersonalActivities = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 text-gray-800">
      {/* Left Content */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 mt-19">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Assist Personal Activities High
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          High-level personal activities assistance is provided for individuals 
          who require significant support to manage their daily lives. This scope 
          covers a range of services, including help with personal care (such as 
          bathing, dressing, and grooming), meal preparation, and mobility support.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Delivered with dignity and respect, these services are customized to 
          enhance the quality of life for those with complex needs, ensuring they 
          can maintain independence within a safe and comfortable environment.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Trained professionals work closely with individuals to address their specific 
          requirements, promoting both physical and emotional well-being.
        </p>

        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 shadow-md w-max">
          Learn More
        </button>
      </div>

      {/* Right Image Section */}
      <div
        className="flex-1 relative bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-01e391d5b0e6?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/60 to-blue-600/60 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-md">
            Quality Care with Respect & Dignity
          </h2>
          <p className="text-base md:text-lg max-w-md text-white mb-4 drop-shadow-sm">
            Ensuring comfort, safety, and independence for individuals with high-level personal activity needs.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-2 px-5 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistPersonalActivities;
