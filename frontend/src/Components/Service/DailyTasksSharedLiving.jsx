import React from "react";
import { Home, UtensilsCrossed, HandCoins, Users } from "lucide-react";

const DailyTasksSharedLiving = () => {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4">
          Daily Tasks / Shared Living
        </h1>
        <p className="text-amber-900 text-lg leading-relaxed">
          Support with daily tasks and shared living is aimed at individuals living in shared accommodations
          or those needing help with routine activities. This scope covers meal planning, cleaning, budgeting,
          and fostering a harmonious living environment among housemates. Services promote skill-building and
          independence while ensuring shared spaces are safe and supportive.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition duration-300">
          <Home size={50} className="text-amber-600 mb-4" />
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">Comfortable Living Spaces</h2>
          <p className="text-amber-900">
            We help maintain a safe, clean, and positive environment in shared homes — ensuring comfort and collaboration.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition duration-300">
          <UtensilsCrossed size={50} className="text-amber-600 mb-4" />
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">Meal Planning & Cooking</h2>
          <p className="text-amber-900">
            From grocery shopping to meal prep, we support residents in making nutritious and shared meals together.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition duration-300">
          <HandCoins size={50} className="text-amber-600 mb-4" />
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">Budgeting & Money Skills</h2>
          <p className="text-amber-900">
            Learn essential financial habits — budgeting, managing shared expenses, and building responsibility.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition duration-300">
          <Users size={50} className="text-amber-600 mb-4" />
          <h2 className="text-2xl font-semibold text-amber-800 mb-3">Social Harmony</h2>
          <p className="text-amber-900">
            We encourage teamwork and understanding to create a respectful, supportive household for everyone.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-20 max-w-3xl text-center">
        <p className="text-lg text-amber-900 leading-relaxed">
          By addressing both practical and social aspects of communal living, this support helps individuals
          thrive in a collaborative and respectful household setting.
        </p>
      </div>
    </div>
  );
};

export default DailyTasksSharedLiving;
