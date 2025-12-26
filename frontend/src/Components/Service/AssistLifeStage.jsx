import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AssistLifeStage = () => {
  const transitions = [
    {
      icon: "🎓",
      title: "School to Work",
      description: "Career guidance and employment readiness support"
    },
    {
      icon: "🏠",
      title: "Independent Living",
      description: "Skills for managing your own home and daily life"
    },
    {
      icon: "👨‍💼",
      title: "Career Changes",
      description: "Support through professional transitions"
    },
    {
      icon: "🌅",
      title: "Retirement Planning",
      description: "Smooth transition into retirement years"
    }
  ];

  const supportServices = [
    "Skill development workshops",
    "Emotional support counseling",
    "Service coordination",
    "Goal setting and planning",
    "Resource connection",
    "Confidence building"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Life Transition Support
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Assist-Life Stage & Transition
            <span className="text-blue-600 block">Navigating Life's Important Changes</span>
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Main Image Section */}
        <div className="flex justify-center items-center my-12 px-4">
          <img
            src="/lifestage.jpg"
            alt="Life stage transitions and support"
            className="w-full max-w-5xl h-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>


        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content - Description */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Life stage and transition support is essential for individuals navigating significant
                changes or milestones, such as moving from school to work, transitioning to independent
                living, or adjusting to retirement.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                This registration scope offers <span className="text-blue-600 font-semibold">guidance and practical assistance</span> to ease these shifts,
                including skill development, emotional support, and coordination with other services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's helping a young adult enter the workforce or supporting an older individual
                through retirement, these services aim to build confidence and resilience, ensuring smooth
                and successful transitions at every life stage.
              </p>
            </div>

            {/* Support Services List */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Support Includes:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {supportServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Transition Types */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {transitions.map((transition, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {transition.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {transition.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {transition.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>



            {/* Quick Contact */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Ready for Your Next Chapter?</h4>
              <p className="text-blue-700 text-sm mb-3">Our transition specialists are here to guide you through life's important changes.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "The transition support helped me confidently start my first job after university.",
                name: "Sarah, 23"
              },
              {
                quote: "Moving to independent living was seamless with their guidance and practical help.",
                name: "Michael, 35"
              },
              {
                quote: "Retirement planning support made this new chapter exciting instead of daunting.",
                name: "Robert, 67"
              }
            ].map((story, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">"{story.quote}"</p>
                <p className="text-blue-600 font-semibold">{story.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
            <p className="text-gray-600">Customized support plans tailored to your specific transition needs.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
            <p className="text-gray-600">Experienced professionals specializing in life stage transitions.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Success</h3>
            <p className="text-gray-600">Ongoing support to ensure sustainable and positive outcomes.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link
          to="/ndis"
          className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 mb-4"
        >
          Contact Us <FaArrowRight />
        </Link>
      </div>

    </div>
  );
};

export default AssistLifeStage;