import React from "react";
import { Users, Calendar, Handshake, Smile, Heart, Star, Target, Award } from "lucide-react";

const ParticipateCommunity = () => {
  const features = [
    {
      icon: <Users className="text-teal-600 w-8 h-8" />,
      title: "Social Connections",
      description: "Build meaningful relationships and expand your social network"
    },
    {
      icon: <Calendar className="text-teal-600 w-8 h-8" />,
      title: "Organized Outings",
      description: "Regular community events and activities tailored to your interests"
    },
    {
      icon: <Handshake className="text-teal-600 w-8 h-8" />,
      title: "Group Events",
      description: "Participate in workshops, classes, and social gatherings"
    },
    {
      icon: <Smile className="text-teal-600 w-8 h-8" />,
      title: "Companionship",
      description: "Friendly support to help you engage with your community"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      text: "Enhanced sense of belonging"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      text: "Improved social skills"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      text: "Personal growth opportunities"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      text: "Community recognition"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Community Engagement Services
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Participate Community
            <span className="text-teal-600 block">Building Stronger Connections</span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Main Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
     
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold drop-shadow-md">
                Connect, Engage, and Thrive Together
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-sm max-w-2xl">
                Building meaningful connections and fostering a sense of belonging in your community
              </p>
              <button className="bg-white text-teal-700 hover:text-teal-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">500+</div>
              <div className="text-sm text-gray-600 font-medium">Members</div>
            </div>
          </div>
        </div>
             <img
            src="community.jpg"
            alt="Community participation and social engagement"
            className="w-full h-[300px] lg:h-[300px] object-cover"
          />

        {/* Main Content Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Community participation support helps individuals connect with and contribute to their
                local areas through social, recreational, or cultural activities. This scope involves
                organizing outings, facilitating group events, or providing companionship to encourage
                engagement.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                The focus is on <span className="text-teal-600 font-semibold">building social skills, fostering relationships, and enhancing
                a sense of belonging</span>. By breaking down isolation, this service enriches lives and
                strengthens community ties.
              </p>
            </div>

            {/* Benefits List */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Ready to Connect?</h4>
              <p className="text-green-700 text-sm mb-3">Join our growing community and discover new opportunities for engagement.</p>
              <button className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Our Community Coordinator
              </button>
            </div>
          </div>
        </div>

g

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Environment</h3>
            <p className="text-gray-600">Welcoming space for people of all abilities and backgrounds.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supportive Network</h3>
            <p className="text-gray-600">Build lasting friendships and support systems.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Smile className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Growth</h3>
            <p className="text-gray-600">Develop new skills and confidence through community engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateCommunity;