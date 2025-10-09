import React from "react";
import {
  Sparkles,
  Users,
  HeartHandshake,
  Lightbulb,
  Palette,
  HandHeart,
} from "lucide-react";

const InnovCommunityParticipation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-6 pt-[76px] pb-16">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          Innovative Community Participation
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Innovative community participation encourages individuals to engage
          actively and creatively in their communities through unique and
          tailored programs. This registration scope might include workshops,
          social groups, or volunteer opportunities designed to build
          connections and skills. By fostering inclusion and creativity, these
          services empower individuals to contribute to society, enhance their
          social networks, and discover new interests — all while overcoming
          barriers to participation.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mb-16">
        {[
          {
            icon: <Users className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Social Groups",
            desc: "Join interactive gatherings that foster friendship, teamwork, and shared joy.",
          },
          {
            icon: <Palette className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Creative Workshops",
            desc: "Explore art, music, and crafts to express individuality and imagination.",
          },
          {
            icon: <HeartHandshake className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Volunteer Opportunities",
            desc: "Contribute to your community through acts of service that make a difference.",
          },
          {
            icon: <Lightbulb className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Skill Development",
            desc: "Gain practical abilities and confidence through collaborative learning experiences.",
          },
          {
            icon: <Sparkles className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Innovative Programs",
            desc: "Participate in modern, inclusive initiatives that inspire social change.",
          },
          {
            icon: <HandHeart className="text-purple-600 w-10 h-10 mb-3" />,
            title: "Community Support",
            desc: "Build a network of support and belonging within a caring environment.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <button className="bg-purple-600 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Join the Community
        </button>
      </div>
    </div>
  );
};

export default InnovCommunityParticipation;
