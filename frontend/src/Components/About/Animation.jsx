import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "For Healthcare Facilities:",
    text: "CCNA care is your reliable partner in healthcare staffing. We provide qualified nurses and carers to ensure your facility operates seamlessly, delivering excellent care consistently. We provide a range of services.",
    buttonText: "Get Staffing Now",
    link: "/staffing",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "For Job Seekers:",
    text: "Discover rewarding healthcare careers with CCNA. We offer tailored support to match your skills and preferences with the right opportunities, so you can make a meaningful difference in healthcare.",
    buttonText: "Apply Now",
    link: "/job",
    gradient: "from-green-600 to-green-800",
  },
  {
    title: "For Care Facilities:",
    text: "CCNA is your trusted resource for skilled healthcare staff. We understand the importance of having dedicated professionals available when you need them most, ensuring top-notch care for your residents.",
    buttonText: "Get Staffing Now",
    link: "/staffing",
    gradient: "from-purple-600 to-purple-800",
  },
];

const Animation = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex flex-col"
          >
            {/* Header */}
            <div
              className={`bg-gradient-to-r ${card.gradient} text-white p-6 rounded-t-2xl`}
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                {card.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6">
                {card.text}
              </p>

              {/* Button INSIDE Card */}
              <Link
                to={card.link}
                className="mt-auto inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              >
                {card.buttonText} →
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Animation;
