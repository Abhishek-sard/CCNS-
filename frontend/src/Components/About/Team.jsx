import React from "react";

// Sample team members data
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "John Smith",
    role: "Head of Recruitment",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Emily Davis",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Michael Brown",
    role: "HR Specialist",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals work together to provide top-quality healthcare staffing solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-center p-6"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-600">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-700 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-600 transition">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href={member.facebook} className="text-blue-800 hover:text-blue-900 transition">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
