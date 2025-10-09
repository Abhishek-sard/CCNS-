import React from "react";
import lifeSkillsImage from "../../assets/Education.jpg";

const DevelopmentLifeSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6 py-24 pt-28">
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full h-full flex justify-center">
          <img
            src={lifeSkillsImage}
            alt="Life Skills Development"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
            Development - Life Skills
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Life skills development is a transformative service that equips individuals with the
            tools needed to navigate daily challenges and achieve personal goals. This scope includes
            training in areas such as financial literacy, time management, communication, and
            problem-solving. Delivered through practical, hands-on sessions, these programs build
            confidence and self-sufficiency, enabling individuals to lead more independent and
            fulfilling lives. This support is particularly valuable for those transitioning to new
            phases or seeking to enhance their capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentLifeSkills;
