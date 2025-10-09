import React from "react";
import { Brain, Clock, MessageCircle, PiggyBank, Target } from "lucide-react";

const DevelopmentLifeSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          Development - Life Skills
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Empower yourself with essential life skills that inspire independence, confidence, 
          and success. We provide practical guidance designed to help you master 
          communication, problem-solving, time management, and more.
        </p>
      </div>

      {/* Skill Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {[
          {
            icon: <PiggyBank className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Financial Literacy",
            text: "Learn how to manage your money wisely and build a stable future.",
          },
          {
            icon: <Clock className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Time Management",
            text: "Develop strategies to balance work, goals, and personal growth effectively.",
          },
          {
            icon: <MessageCircle className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Effective Communication",
            text: "Enhance your interpersonal skills and express yourself with confidence.",
          },
          {
            icon: <Brain className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Problem Solving",
            text: "Gain practical techniques to face challenges and make better decisions.",
          },
          {
            icon: <Target className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Goal Setting",
            text: "Turn your dreams into achievable plans with structured guidance.",
          },
          {
            icon: <Users className="text-indigo-600 w-10 h-10 mb-3" />,
            title: "Social Skills",
            text: "Build relationships and confidence in social and professional settings.",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition transform hover:shadow-2xl"
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Start Your Growth Journey
        </button>
      </div>
    </div>
  );
};

export default DevelopmentLifeSkills;
