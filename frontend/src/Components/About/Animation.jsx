import React from "react";

const cards = [
  {
    title: "For Healthcare Facilities:",
    text: "CCNA care is your reliable partner in healthcare staffing. We provide qualified nurses and carers to ensure your facility operates seamlessly, delivering excellent care consistently. We provide a range of services. ",
  },
  {
    title: "For Job Seekers:",
    text: "Discover rewarding healthcare careers with CCNA. We offer tailored support to match your skills and preferences with the right opportunities, so you can make a meaningful difference in healthcare.",
  },
  {
    title: "For Care Facilities:",
    text: "CCNA is your trusted resource for skilled healthcare staff. We understand the importance of having dedicated professionals available when you need them most, ensuring top-notch care for your residents.",
  },
];

const Animation = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
              <h3 className="text-xl md:text-2xl font-semibold">{card.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{card.text}</p>
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition-all duration-300">
                CCNA care
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animation;
