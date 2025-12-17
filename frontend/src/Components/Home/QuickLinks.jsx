import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaUserNurse } from "react-icons/fa";

const QuickLinks = () => {
  return (
    <>
      <section className="relative text-gray-800 h-screen flex items-center overflow-hidden">

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-brightness-105 z-[1]" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[-2]" />

        {/* Gradient Overlay + Blobs */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-white/40 via-teal-50/40 to-teal-100/40 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply blur-xl animate-float" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply blur-xl animate-float delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply blur-xl animate-float delay-4000" />
          </div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-teal-300/40 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 container mx-auto px-6 md:px-16 text-center flex flex-col justify-center h-full">

          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide mb-10">
            Comprehensive Care and Nursing Agency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* Card 1 */}
            <Link
              to="/NdisCover"
              className="group backdrop-blur-xl bg-white/90 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <FaHospital className="text-6xl md:text-7xl text-teal-600 mb-6 group-hover:scale-110 transition" />

                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  NDIS Services
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Personalised support and exceptional care services for all NDIS
                  participants to live independently.
                </p>

                <span className="mt-6 text-teal-600 font-semibold text-lg group-hover:text-teal-800 transition">
                  Explore →
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/Staffing"
              className="group backdrop-blur-xl bg-white/90 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <FaUserNurse className="text-6xl md:text-7xl text-teal-600 mb-6 group-hover:scale-110 transition" />

                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Staffing Solutions
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Highly qualified nurses and support professionals for healthcare
                  facilities across Australia.
                </p>

                <span className="mt-6 text-teal-600 font-semibold text-lg group-hover:text-teal-800 transition">
                  Explore →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default QuickLinks;
