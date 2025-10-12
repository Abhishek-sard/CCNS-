import React, { useState, useEffect } from "react";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/team");
      const data = await response.json();
      setTeamMembers(data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading our amazing team...</p>
        </div>
      </div>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No Team Members Yet</h3>
          <p className="text-gray-500">We're assembling our dream team. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
          Our Dream Team
        </div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Meet Our Experts
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get to know the brilliant minds behind our success. Each member brings unique expertise and passion to our team.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={member._id}
            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
            }}
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative z-10 pt-8 px-6">
              <div className="relative inline-block">
                {member.image && (
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 shadow-2xl">
                      <img
                        src={
                          member.image.startsWith("http")
                            ? member.image
                            : `http://localhost:5000${member.image}`
                        }
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 pt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              
              <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-1 mb-3">
                <p className="text-blue-700 font-semibold text-sm">{member.role}</p>
              </div>

              {member.bio && (
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {member.bio}
                </p>
              )}

              {/* Social Links */}
              {(member.linkedin || member.twitter || member.facebook) && (
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100 border-opacity-50">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        LinkedIn
                      </span>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md"
                    >
                      <i className="fab fa-twitter text-lg"></i>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Twitter
                      </span>
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md"
                    >
                      <i className="fab fa-facebook text-lg"></i>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Facebook
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-[3px] rounded-3xl bg-white"></div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Team;