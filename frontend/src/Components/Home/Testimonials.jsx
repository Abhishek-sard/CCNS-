import React from "react";
import Img1 from "../../assets/ndis.jpg";
import Img2 from "../../assets/ndis2.jpg";
import Img3 from "../../assets/ndis3.jpg";

const testimonials = [
  {
    role: "NDIS Participant",
    photo: Img1,
    quote: "CCNA Agency has truly changed my life. Their support is compassionate and reliable."
  },
  {
    role: "Facility Manager",
    photo: Img2,
    quote: "The staffing solutions provided by CCNA Agency are professional and trustworthy."
  },
  {
    role: "Family Member",
    photo: Img3,
    quote: "CCNA Agency has been a lifesaver for my son. Their staff are kind, professional, and reliable."
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
      
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            What Our Clients Say
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-700 to-gray-900 bg-clip-text text-transparent">
              Success Stories & 
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover how CCNA Agency has made a difference in the lives of our clients and partners
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl min-h-[400px] flex flex-col">
                
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-white text-xl">❝</span>
                </div>
                
                {/* Profile Image */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full transform scale-110 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.role}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Online Indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white z-20 animate-pulse"></div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-6 font-light italic group-hover:text-gray-800 transition-colors duration-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Role */}
                <div className="text-center mt-auto">
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-2xl border border-blue-200">
                    <span className="text-blue-700 font-semibold text-sm md:text-base">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-4xl text-blue-200">✦</div>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Lives Impacted" },
            { number: "24/7", label: "Support Available" },
            { number: "50+", label: "Communities Served" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-8">
            Ready to experience the CCNA Agency difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                Share Your Story
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">✨</span>
              </span>
            </button>
            <button className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                Read More Stories
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">📖</span>
              </span>
            </button>
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

export default Testimonials;