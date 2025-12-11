import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AssistTravelTransport = () => {
    const travelServices = [
        {
            icon: "🚌",
            title: "Accessible Transportation",
            description: "Fully equipped vehicles for comfortable and safe travel"
        },
        {
            icon: "👥",
            title: "Trip Accompaniment",
            description: "Companion support throughout your journey"
        },
        {
            icon: "🗺️",
            title: "Public Transport Guidance",
            description: "Expert navigation through public transport systems"
        },
        {
            icon: "🏥",
            title: "Medical & Social Visits",
            description: "Reliable transport for important appointments"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Travel & Transport Services
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Assist Travel & Transport
                        <span className="text-green-600 block">Safe & Comfortable Journeys</span>
                    </h1>

                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
                </div>

                {/* Main Image Section */}
                <div className="relative w-full rounded-none overflow-hidden shadow-2xl mb-12">
                    <img
                        src="transport.jpg"
                        alt="Transport"
                        className="w-full h-[600px] object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                                Seamless Travel & Transport Support
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl">
                                Ensuring safe, comfortable, and accessible transportation for all your journey needs.
                            </p>
                            <button className="bg-white text-green-700 hover:text-green-800 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                                Book Your Journey
                            </button>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">24/7</div>
                            <div className="text-sm text-gray-600 font-medium">Service</div>
                        </div>
                    </div>

                    {/* Floating Testimonial Card */}
                    <div className="absolute bottom-6 right-6 bg-green-600 text-white rounded-2xl shadow-xl p-6 max-w-xs">
                        <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-sm font-medium">
                            "Reliable service that makes travel stress-free and enjoyable"
                        </p>
                    </div>
                </div>


                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Content - Text Section */}
                    <div className="space-y-8">
                        {/* Content Paragraphs */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Travel and transport assistance ensures that individuals can move safely and confidently
                                within their communities or beyond. This includes arranging accessible transportation,
                                accompanying individuals on trips, or providing guidance on public transport options.
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Whether attending medical appointments, social outings, or family visits, support is
                                    <span className="text-green-600 font-semibold"> customized to accommodate physical, cognitive, or other needs</span>,
                                    ensuring a seamless and enjoyable travel experience for everyone.
                                </p>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our trained professionals work closely with you to understand your specific requirements,
                                providing personalized support that promotes independence and confidence in travel.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">Wheelchair Accessible</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">Trained Drivers</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">Door-to-Door Service</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">Emergency Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Services Grid */}
                    <div className="space-y-8">
                        {/* Services Grid */}
                        <div className="grid gap-6">
                            {travelServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Need Transportation Now?</h4>
                            <p className="text-green-700 text-sm mb-3">Our fleet is ready to serve you 24/7 with immediate booking available.</p>
                            <button className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now: 0421 079 928
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🛡️</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
                        <p className="text-gray-600">All vehicles maintained to highest safety standards with trained professionals.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">⏱️</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Punctual Service</h3>
                        <p className="text-gray-600">Reliable and timely pickups with real-time tracking available.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-2xl">💝</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
                        <p className="text-gray-600">Understanding drivers who prioritize your comfort and well-being.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Link
                    to="/NdisContact"
                    className="px-10 py-5 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 mb-5"
                >
                    Contact Us <FaArrowRight />
                </Link>
            </div>

        </div>
    );
};

export default AssistTravelTransport;