import React from "react";
import { Users, Brush, Activity, Book, Calendar } from "lucide-react";

const GroupCentreActivities = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-16">
            {/* Header Section */}
            <div className="text-center mb-12 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
                    Group / Centre Activities
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Group and center activities provide a vibrant and social environment where individuals can participate in structured programs and recreational pursuits. This scope includes art classes, fitness groups, educational workshops, or social events held at community centers. Designed to encourage interaction and skill-building, these activities promote mental and physical health while fostering a sense of community. They offer a fun and supportive space for individuals to connect and grow.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
                {[
                    {
                        icon: <Users className="text-pink-600 w-10 h-10 mb-3" />,
                        title: "Social Interaction",
                    },
                    {
                        icon: <Brush className="text-pink-600 w-10 h-10 mb-3" />,
                        title: "Art Classes",
                    },
                    {
                        icon: <Activity className="text-pink-600 w-10 h-10 mb-3" />,
                        title: "Fitness Groups",
                    },
                    {
                        icon: <Book className="text-pink-600 w-10 h-10 mb-3" />,
                        title: "Educational Workshops",
                    },
                    {
                        icon: <Calendar className="text-pink-600 w-10 h-10 mb-3" />,
                        title: "Social Events",
                    },
                ]
                    .map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center">
                                <div className="bg-pink-100 p-4 rounded-full mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            </div>
                        </div>
                    ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <button className="bg-pink-600 hover:bg-pink-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
                    Join the Activities
                </button>
            </div>
        </div>
    );
};

export default GroupCentreActivities;
