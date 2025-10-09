import React from "react";

const AssistLifeStage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Left Content */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 mt-19">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Assist-Life Stage & Transition
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Life stage and transition support is essential for individuals navigating significant changes or milestones, such as moving from school to work, transitioning to independent living, or adjusting to retirement.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          This registration scope offers guidance and practical assistance to ease these shifts, including skill development, emotional support, and coordination with other services.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Whether it’s helping a young adult enter the workforce or supporting an older individual through retirement, these services aim to build confidence and resilience, ensuring smooth and successful transitions at every life stage.
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
            "url('https://images.unsplash.com/photo-1597764699222-64b24be9634c?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/60 to-blue-600/60 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-md">
            Guiding You Through Life’s Changes
          </h2>
          <p className="text-base md:text-lg max-w-md text-white mb-4 drop-shadow-sm">
            Providing practical assistance and emotional support for smooth and successful life transitions.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-2 px-5 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistLifeStage;
