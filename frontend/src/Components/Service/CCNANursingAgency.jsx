import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import {
  Home,
  Search,
  FileText,
  Shield,
  Users,
  Wrench,
  Scale,
  ArrowRight,
  Star,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react";

const CCNANursingAgency = () => {
  useEffect(() => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(item);
    });
  }, []);

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      text: "Finding suitable housing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Negotiating tenancy agreements",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Ensuring safety standards",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Advocacy with landlords",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      text: "Maintenance support",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      text: "Guidance on tenancy rights",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    { number: "100+", label: "Homes Secured", icon: <Home className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
    { number: "2+", label: "Locations", icon: <MapPin className="w-5 h-5" /> },
    { number: "98%", label: "Success Rate", icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[140px]">
        {/* Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-2xl">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
              Home
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Secure
              </span>
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Accommodation & Tenancy Services
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We help individuals find safe and supportive living environments through
            comprehensive accommodation and tenancy support services.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative max-w-5xl mx-auto mb-16 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1470&q=80"
              alt="Modern accommodation and housing"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white ">
              <h3 className="text-2xl font-bold mb-2">Your Home, Our Priority</h3>
              <p className="text-blue-100">Safe, stable, and supportive living environments</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Services */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Comprehensive Support Services
            </h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-item group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.text}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Professional support and guidance for all your tenancy needs
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Why Choose HomeSecure?</h3>

            <div className="space-y-4 mb-8">
              {[
                "Expert tenancy negotiation and advocacy",
                "Comprehensive safety and standards compliance",
                "24/7 maintenance and support services",
                "Legal guidance and rights protection",
                "Personalized housing solutions",
                "Long-term tenancy stability"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-3">Ready to Find Your Perfect Home?</h4>
              <p className="text-blue-100 mb-4 text-sm">
                Schedule a free consultation with our accommodation specialists today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Link
          to="/NdisContact"
          className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 mb-6"
        >
          Contact Us <FaArrowRight />
        </Link>
      </div>



    </div>
  );
};

export default CCNANursingAgency;