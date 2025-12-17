import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px),
                           linear-gradient(to bottom, gray 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg mb-8">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
              </div>
              <span className="text-blue-700 font-semibold text-sm md:text-base">
                Dual Service Provider
              </span>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              We are a <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">registered NDIS provider</span> and a{" "}
              <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">trusted staffing partner</span> for healthcare organisations.
            </p>
          </div>

          {/* Mission Statement - Enhanced */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/50 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-500 opacity-60"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-500 opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500 opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-500 opacity-60"></div>

              {/* Mission Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto"></div>
              </div>

              {/* Mission Content */}
              <div className="space-y-6 text-center max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  Our mission is simple: to provide{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-semibold text-blue-600">person-centred support</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 opacity-60 -z-10 transform -rotate-1"></span>
                  </span>{" "}
                  for individuals with disabilities and to deliver{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-semibold text-green-600">skilled, reliable staff</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-green-100 opacity-60 -z-10 transform rotate-1"></span>
                  </span>{" "}
                  where healthcare facilities need them most.
                </p>

                {/* Highlight Box */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border-2 border-blue-100 transform transition-all duration-300 group-hover:border-green-200">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 flex items-center justify-center gap-4">
                    <span className="text-3xl animate-bounce">💙</span>
                    <span>
                      One agency. <span className="text-blue-600">Two solutions.</span> Endless support.
                    </span>
                    <span className="text-3xl animate-bounce delay-1000">🌟</span>
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-500 rounded-full opacity-20 animate-ping delay-1000"></div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">

            {/* Card 1 */}
            <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                🛡️
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  NDIS Registered Provider
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fully accredited and compliant
                </p>

                <Link
                  to="/ndisCover"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">
                👥
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Staffing Solution
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Trusted by healthcare facilities
                </p>

                <Link
                  to="/staffing"
                  className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-800 transition"
                >
                  View Services →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Intro;