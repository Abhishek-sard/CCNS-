import React from "react";
import Image from '../../assets/finance.jpg'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  Sparkles,
  Users,
  HeartHandshake,
  Lightbulb,
  Palette,
  HandHeart,
  ArrowRight,
} from "lucide-react";

const InnovCommunityParticipation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-6 pt-24 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-6xl w-full">
        <div className="mb-8">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Community Engagement
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Innovative Community
            <span className="block text-purple-700">Participation</span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur-lg opacity-30"></div>
          <img
            src="communityparty.jpg"
            alt="Community participation and engagement"
            className="relative w-full h-auto rounded-xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <p className="text-sm font-semibold text-purple-700">Building Stronger Communities Together</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Innovative community participation encourages individuals to engage
            actively and creatively in their communities through unique and
            tailored programs. This registration scope might include workshops,
            social groups, or volunteer opportunities designed to build
            connections and skills.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            By fostering inclusion and creativity, these services empower individuals to contribute to society, enhance their social networks, and discover new interests — all while overcoming barriers to participation.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full mb-16">
        {[
          {
            icon: <Users className="text-purple-600 w-12 h-12" />,
            title: "Social Groups",
            desc: "Join interactive gatherings that foster friendship, teamwork, and shared joy.",
            gradient: "from-blue-500 to-purple-500",
          },
          {
            icon: <Palette className="text-purple-600 w-12 h-12" />,
            title: "Creative Workshops",
            desc: "Explore art, music, and crafts to express individuality and imagination.",
            gradient: "from-purple-500 to-pink-500",
          },
          {
            icon: <HeartHandshake className="text-purple-600 w-12 h-12" />,
            title: "Volunteer Opportunities",
            desc: "Contribute to your community through acts of service that make a difference.",
            gradient: "from-green-500 to-teal-500",
          },
          {
            icon: <Lightbulb className="text-purple-600 w-12 h-12" />,
            title: "Skill Development",
            desc: "Gain practical abilities and confidence through collaborative learning experiences.",
            gradient: "from-yellow-500 to-orange-500",
          },
          {
            icon: <Sparkles className="text-purple-600 w-12 h-12" />,
            title: "Innovative Programs",
            desc: "Participate in modern, inclusive initiatives that inspire social change.",
            gradient: "from-indigo-500 to-purple-600",
          },
          {
            icon: <HandHeart className="text-purple-600 w-12 h-12" />,
            title: "Community Support",
            desc: "Build a network of support and belonging within a caring environment.",
            gradient: "from-red-400 to-pink-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-purple-50"
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="flex flex-col items-center text-center relative z-10">
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white p-4 rounded-full shadow-lg border border-gray-100">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community today and start your journey towards meaningful participation and personal growth.
          </p>

        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/ndis"
          className="px-10 py-5 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
        >
          Contact Us <FaArrowRight />
        </Link>
      </div>

    </div>
  );
};

export default InnovCommunityParticipation;