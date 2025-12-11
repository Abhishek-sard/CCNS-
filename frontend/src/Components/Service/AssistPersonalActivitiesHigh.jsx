import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AssistPersonalActivitiesHigh = () => {
  const services = [
    {
      icon: "🧹",
      title: "Household Chores",
      description: "Daily cleaning and maintenance support"
    },
    {
      icon: "🚿",
      title: "Personal Hygiene",
      description: "Bathing, grooming, and personal care assistance"
    },
    {
      icon: "🛒",
      title: "Shopping Assistance",
      description: "Grocery shopping and essential errands"
    },
    {
      icon: "👥",
      title: "Social Engagement",
      description: "Community participation and social activities"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex justify-center items-center ">
        <img
          src="/personalactivity.jpg"
          alt="Personal Activity"
          className="h-[400px] w-[700px] object-cover rounded-2xl shadow-lg mt-25"
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
              {/* Introduction */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Personalized Support Services
                </div>

                <p className="text-xl leading-relaxed text-gray-700">
                  Personal activities assistance focuses on supporting individuals with everyday tasks to promote independence and improve their quality of life.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  Services are tailored to the individual's abilities and preferences, delivered by compassionate and skilled support workers. By addressing these fundamental needs, this scope enables individuals to focus on their goals and enjoy a balanced lifestyle, fostering a sense of autonomy and dignity in their daily routines.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 group hover:shadow-lg border border-blue-100"
                  >
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
                <span>Learn More About Our Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Content - Additional Info */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Support for Everyday Independence
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Our compassionate team provides personalized assistance that respects your dignity while promoting self-reliance in daily activities.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Support?</h3>
                  {[
                    "Tailored to individual needs and preferences",
                    "Compassionate and skilled support workers",
                    "Focus on dignity and autonomy",
                    "Flexible scheduling options"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-blue-100">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Additional CTA */}
                <div className="flex justify-center mt-4">
                  <Link
                    to="/NdisContact"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
                  >
                    Get Started Now<FaArrowRight />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🎯",
              title: "Personalized Approach",
              description: "Customized care plans designed around your unique needs and preferences."
            },
            {
              icon: "🤝",
              title: "Compassionate Care",
              description: "Dedicated support workers who genuinely care about your well-being."
            },
            {
              icon: "🏠",
              title: "Home Environment",
              description: "Support provided in the comfort and familiarity of your own home."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssistPersonalActivitiesHigh;