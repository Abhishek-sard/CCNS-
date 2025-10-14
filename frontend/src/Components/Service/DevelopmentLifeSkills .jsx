import React from "react";

const DevelopmentLifeSkills = () => {
  const lifeSkills = [
    {
      icon: "💰",
      title: "Financial Literacy",
      description: "Budgeting, saving, and financial planning skills for independent living"
    },
    {
      icon: "⏰",
      title: "Time Management",
      description: "Effective scheduling and prioritization techniques"
    },
    {
      icon: "💬",
      title: "Communication Skills",
      description: "Verbal and non-verbal communication for better relationships"
    },
    {
      icon: "🔍",
      title: "Problem Solving",
      description: "Critical thinking and decision-making strategies"
    },
    {
      icon: "🏠",
      title: "Daily Living Skills",
      description: "Cooking, cleaning, and household management"
    },
    {
      icon: "🤝",
      title: "Social Skills",
      description: "Building and maintaining positive relationships"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            Personal Development Services
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Development - Life Skills
            <span className="text-indigo-600 block">Empowering Independent Living</span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Main Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img
            src="development.jpg"
            alt="Life Skills Development Education"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold drop-shadow-md">
                Transform Your Daily Life Through Essential Skills
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-sm max-w-2xl">
                Practical training that builds confidence and self-sufficiency for a more independent future
              </p>
              <button className="bg-white text-indigo-700 hover:text-indigo-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content - Description */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Life skills development is a transformative service that equips individuals with the
                tools needed to navigate daily challenges and achieve personal goals. This scope includes
                training in areas such as financial literacy, time management, communication, and
                problem-solving.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Delivered through <span className="text-indigo-600 font-semibold">practical, hands-on sessions</span>, these programs build
                confidence and self-sufficiency, enabling individuals to lead more independent and
                fulfilling lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                This support is particularly valuable for those transitioning to new
                phases or seeking to enhance their capabilities in everyday life situations.
              </p>
            </div>
          </div>

          {/* Right Content - Key Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Increased independence in daily living</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Enhanced problem-solving abilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Improved social and communication skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Better financial management capabilities</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Enroll Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                View Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Life Skills Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Life Skills Training
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
            <p className="text-gray-600">Customized training plans based on individual needs and goals.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Trainers</h3>
            <p className="text-gray-600">Experienced professionals with proven success in life skills development.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
            <p className="text-gray-600">Regular assessments to monitor improvement and adjust training.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentLifeSkills;