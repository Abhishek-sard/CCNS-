import React, { useEffect } from "react";

const CCNANursingAgency = () => {
  useEffect(() => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-20px)";
      item.style.transition = "opacity 0.5s, transform 0.5s";
      observer.observe(item);
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 text-gray-800">
      {/* Left Content */}
      <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-start space-y-6">
        <div className="flex items-center text-2xl font-bold text-gray-700">
          <i className="fas fa-home text-blue-500 mr-2"></i>
          <span>HomeSecure</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Accommodation & Tenancy Services
        </h1>

        <p className="text-lg leading-relaxed">
          We help individuals find safe and supportive living environments.
          Our services include finding housing, negotiating tenancy agreements,
          and ensuring safety standards.
        </p>

        <div className="space-y-3">
          {[
            { icon: "fas fa-search", text: "Finding suitable housing" },
            { icon: "fas fa-file-contract", text: "Negotiating tenancy agreements" },
            { icon: "fas fa-shield-alt", text: "Ensuring safety standards" },
            { icon: "fas fa-user-shield", text: "Advocacy with landlords" },
            { icon: "fas fa-tools", text: "Maintenance support" },
            { icon: "fas fa-balance-scale", text: "Guidance on tenancy rights" },
          ].map((item, index) => (
            <div
              key={index}
              className="service-item flex items-center p-3 rounded-lg hover:bg-blue-50 transition"
            >
              <i className={`${item.icon} text-blue-500 w-6 text-center mr-3`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition transform hover:-translate-y-1 shadow-sm w-max">
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div
        className="flex-1 relative bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/60 to-blue-600/60 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">
            Your Home, Our Priority
          </h2>
          <p className="text-base md:text-lg max-w-md mb-4">
            We provide comprehensive support for your accommodation needs, ensuring a safe and stable home.
          </p>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CCNANursingAgency;
