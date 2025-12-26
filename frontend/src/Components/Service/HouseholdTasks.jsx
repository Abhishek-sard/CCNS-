import React from "react";
import Image from "../../assets/housholdtask.jpg";
import { Brush, ShoppingBag, WashingMachine, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const HouseholdTasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-100 flex flex-col items-center pt-[120px] pb-20 px-6">
      {/* Title Section */}
      <div className="text-center mb-14 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-4">
          Household Tasks Support
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We make everyday living easier by helping you manage your household
          tasks with care and efficiency. From cleaning to grocery shopping, our
          support ensures your home stays safe, clean, and comfortable — giving
          you more time to focus on what truly matters.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-180 h max-w-6xl rounded-2xl overflow-hidden shadow-2xl mb-20">
        <img
          src={Image}
          alt="Household Tasks"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Services Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {[
          {
            icon: <Brush className="text-amber-600 w-10 h-10" />,
            title: "Cleaning & Tidying",
            desc: "Keep your home spotless and hygienic with professional cleaning support.",
          },
          {
            icon: <WashingMachine className="text-amber-600 w-10 h-10" />,
            title: "Laundry Assistance",
            desc: "Fresh, clean clothes taken care of with attention to detail and comfort.",
          },
          {
            icon: <ShoppingBag className="text-amber-600 w-10 h-10" />,
            title: "Grocery Shopping",
            desc: "Help with planning, purchasing, and organizing your household essentials.",
          },
          {
            icon: <Wrench className="text-amber-600 w-10 h-10" />,
            title: "Minor Maintenance",
            desc: "Assistance with small repairs and upkeep for a functional home.",
          },
          {
            icon: <Home className="text-amber-600 w-10 h-10" />,
            title: "Organizing Spaces",
            desc: "Declutter and arrange your home to create a peaceful environment.",
          },
          {
            icon: <Brush className="text-amber-600 w-10 h-10" />,
            title: "Outdoor Chores",
            desc: "Support with simple gardening or outdoor cleaning for a welcoming space.",
          },
        ].map((task, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                {task.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {task.title}
              </h3>
              <p className="text-gray-600 text-sm">{task.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
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

export default HouseholdTasks;
