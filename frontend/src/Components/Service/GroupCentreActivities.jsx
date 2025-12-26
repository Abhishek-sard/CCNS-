import React from "react";
import { Users, Brush, Activity, Book, Calendar, Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GroupCentreActivities = () => {
  const activities = [
    {
      icon: <Users className="text-pink-600 w-10 h-10" />,
      title: "Social Interaction",
      description: "Build meaningful connections through guided group discussions, team-building exercises, and community gatherings.",
      benefits: ["Improved communication", "Friendship building", "Community bonding"]
    },
    {
      icon: <Brush className="text-pink-600 w-10 h-10" />,
      title: "Art Classes",
      description: "Express your creativity through painting, pottery, and craft workshops designed for all skill levels.",
      benefits: ["Creative expression", "Stress relief", "Skill development"]
    },
    {
      icon: <Activity className="text-pink-600 w-10 h-10" />,
      title: "Fitness Groups",
      description: "Stay active with yoga, dance, and gentle exercise classes tailored to different abilities and interests.",
      benefits: ["Physical health", "Energy boost", "Fun movement"]
    },
    {
      icon: <Book className="text-pink-600 w-10 h-10" />,
      title: "Educational Workshops",
      description: "Learn new skills through cooking classes, technology training, and personal development sessions.",
      benefits: ["Knowledge growth", "Confidence building", "Practical skills"]
    },
    {
      icon: <Calendar className="text-pink-600 w-10 h-10" />,
      title: "Social Events",
      description: "Celebrate together with themed parties, cultural events, and holiday gatherings throughout the year.",
      benefits: ["Joyful experiences", "Cultural awareness", "Community spirit"]
    },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-100 flex flex-col items-center pt-[80px] pb-20 px-6">
      {/* Title Section */}
      <div className="text-center mb-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Heart className="w-4 h-4" />
          Community Connection
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-6">
          Group & Centre Activities
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Group and centre activities offer a vibrant, social environment where
          individuals can join art, fitness, educational, and social programs.
          These sessions promote connection, learning, and personal growth in a
          supportive setting designed to foster community and well-being.
        </p>
        
        {/* Stats Section */}
        
      </div>

      {/* Image Section with Overlay Text */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl mb-20 group">
        <img
          src="/groupactivity.jpg"
          alt="Group Activity - People enjoying community activities together"
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
        <div className="absolute bottom-6 left-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
            Connect, Create & Celebrate Together
          </h2>
          <p className="text-pink-100 text-sm md:text-base max-w-2xl drop-shadow-md">
            Encouraging teamwork, learning, and personal development through engaging group activities
            that build confidence and create lasting friendships.
          </p>
        </div>
        
        {/* Floating Rating Badge */}
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sm font-semibold text-gray-800">Rated 4.9/5</div>
          <div className="text-xs text-gray-600">by participants</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Join Our Activities?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-3">Social Wellbeing</h3>
            <p className="text-gray-600 text-sm">Reduce isolation and build meaningful relationships in a welcoming community environment.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-3">Personal Growth</h3>
            <p className="text-gray-600 text-sm">Develop new skills, boost confidence, and discover hidden talents through diverse activities.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-3">Health & Wellness</h3>
            <p className="text-gray-600 text-sm">Improve physical and mental health through engaging exercises and stress-relieving activities.</p>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mb-16">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-4 rounded-full mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="space-y-2 w-full">
                {item.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-pink-600">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-gray-600 mb-8">
          Discover the joy of group activities and become part of our vibrant community. 
          New members are always welcome!
        </p>
        
      </div>
      <div className="flex justify-center mt-4">
  <Link
    to="/ndis"
    className="px-10 py-5 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 mb-5"
  >
    Contact Us <FaArrowRight />
  </Link>
</div>

    </div>
  );
};

export default GroupCentreActivities;