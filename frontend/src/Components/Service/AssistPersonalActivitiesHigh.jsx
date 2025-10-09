import React from "react";

const AssistPersonalActivitiesHigh = () => {
  const services = [
    { icon: "fas fa-broom", title: "Household Chores" },
    { icon: "fas fa-shower", title: "Personal Hygiene" },
    { icon: "fas fa-shopping-cart", title: "Shopping Assistance" },
    { icon: "fas fa-users", title: "Social Engagement" },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden ">
      {/* Left Content */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-tr from-blue-50 to-blue-100 mt-19">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Assist-Personal Activities
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Personal activities assistance focuses on supporting individuals with everyday tasks to promote independence and improve their quality of life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <i className={`${service.icon} text-blue-500 text-2xl mr-4`}></i>
              <span className="font-semibold text-gray-800">{service.title}</span>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Services are tailored to the individual’s abilities and preferences, delivered by compassionate and skilled support workers. By addressing these fundamental needs, this scope enables individuals to focus on their goals and enjoy a balanced lifestyle, fostering a sense of autonomy and dignity in their daily routines.
        </p>

        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 shadow-md w-max">
          Learn More
        </button>
      </div>

      {/* Right Image Section */}
      <div
        className="flex-1 relative min-h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598300051870-c45b05aa7e88?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/50 to-blue-400/50 flex justify-center items-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-md text-center px-4">
            Support for Everyday Independence
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AssistPersonalActivitiesHigh;
