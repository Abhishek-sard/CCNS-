import React from "react";
import { Link } from "react-router-dom";
import LogoNurse from '../../assets/filter.png';

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-gray-100 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image with Enhanced Styling */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl border border-blue-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <img 
                  src={LogoNurse}
                  alt="About CCNA Agency"
                  className="w-full max-w-md rounded-xl transform transition duration-700 group-hover:scale-110"
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                  🏆 Trusted
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce delay-1000">
                  ⭐ Certified
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            </div>
          </div>

          {/* Right Content with Enhanced Styling */}
          <div className="lg:w-1/2 space-y-8">
            {/* Section Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                About Our Organization
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  About CCNA
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Agency
                </span>
              </h2>
            </div>

            {/* Content with Icons */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-blue-600 group-hover:text-white text-xl">🌟</span>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light group-hover:text-gray-800 transition-colors duration-300">
                  CCNA Agency plays a dual role in empowering individuals and supporting facilities.
                  We help NDIS participants live fulfilling, independent lives while providing trusted
                  healthcare staffing solutions.
                </p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <span className="text-green-600 group-hover:text-white text-xl">💪</span>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light group-hover:text-gray-800 transition-colors duration-300">
                  Our dedicated team across Australia is committed to delivering compassionate, 
                  high-quality services that make a real difference in people's lives every day.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/about"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center min-w-[200px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More About Us
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group relative bg-white text-blue-700 px-8 py-4 rounded-xl font-bold border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">📞</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "🤝",
              title: "Dual Expertise",
              description: "Combining NDIS support with healthcare staffing solutions"
            },
            {
              icon: "🎯",
              title: "Quality Focus",
              description: "Committed to delivering exceptional care and service"
            },
            {
              icon: "🌏",
              title: "Nationwide Reach",
              description: "Serving communities across Australia"
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;