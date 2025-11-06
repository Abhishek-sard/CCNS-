import React from "react";
import ImageHero from "../../assets/nurse.png";
import { Link } from "react-router-dom";
import WhatappImage from "../../assets/whatapp.jpg";

const Hero = () => {
    return (
        <>
            <section className="relative bg-white text-gray-800 min-h-screen pt-18 flex items-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-teal-50 to-teal-50">
                    {/* Subtle Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
                        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl animate-float delay-4000"></div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 bg-teal-200/50 rounded-full animate-float-slow"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${15 + Math.random() * 10}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left Content with Enhanced Styling */}
                    <div className="text-center md:text-left md:w-1/2 space-y-8">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 bg-teal-100 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200 mb-4">
                            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-teal-700">Trusted Healthcare Partner</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                            Compassionate Care, <br />
                            <span className="text-transparent bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text">
                                Reliable Support
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
                            At <span className="font-semibold text-teal-600">CCNA Agency</span>, we empower NDIS participants to live fulfilling lives
                            while providing trusted healthcare staffing solutions to facilities
                            across Australia.
                        </p>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-4">
                            <Link
                                to="/NdisCover"
                                className="group relative bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center min-w-[200px] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="relative z-10">Explore NDIS Services</span>
                            </Link>

                            <Link
                                to="/Staffing"
                                className="group relative bg-white text-teal-600 px-8 py-4 rounded-xl font-bold border-2 border-teal-500 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center min-w-[200px]"
                            >
                                <span className="relative z-10">Find Staffing Solutions</span>
                                <div className="absolute inset-0 border-2 border-teal-200 rounded-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-600">500+</div>
                                <div className="text-sm text-gray-600">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-600">24/7</div>
                                <div className="text-sm text-gray-600">Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-600">100+</div>
                                <div className="text-sm text-gray-600">Professionals</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Image with Enhanced Styling */}
                    <div className="relative md:w-1/2 flex justify-center">
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-teal-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            {/* Main Image Container */}
                            <div className="relative bg-white rounded-2xl p-4 border border-gray-200 shadow-2xl">
                                <img
                                    src={ImageHero}
                                    alt="Healthcare Support"
                                    className="w-full max-w-md rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
                                />
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                                Trusted
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white text-teal-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg border border-teal-200 animate-bounce delay-1000">
                                Certified
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex flex-col items-center text-teal-600">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-teal-300 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced WhatsApp Button */}
            <div className="fixed bottom-5 right-5 z-50 group">
                <a
                    href="https://wa.me/61421079928?text=Hello%2C%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                >
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>

                    {/* Main Button */}
                    <div className="relative bg-green-500 rounded-full p-2 shadow-2xl transform transition duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <img
                            src={WhatappImage}
                            alt="WhatsApp Chat"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Chat with us!
                        <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-green-600"></div>
                    </div>
                </a>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes tilt {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-tilt {
                    animation: tilt 10s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default Hero;