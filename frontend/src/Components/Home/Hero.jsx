import React from "react";
import ImageHero from "../../assets/nurse.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-gray-700 text-white min-h-screen pt-18 flex items-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Compassionate Care, <br /> Reliable Support
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
                        At CCNA Agency, we empower NDIS participants to live fulfilling lives
                        while providing trusted healthcare staffing solutions to facilities
                        across Australia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/NdisCover"
                            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
                        >
                            Explore NDIS Services
                        </Link>

                        <Link
                            to="/Staffing"
                            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition text-center"
                        >
                            Find Staffing Solutions
                        </Link>
                    </div>
                </div>

                {/* Right Side Image */}
                <img
                    src={ImageHero}
                    alt="Healthcare Support"
                    className="w-3/4 sm:w-4/5 md:w-full max-w-lg rounded-lg shadow-lg 
             transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
                />


            </div>
        </section>
    );
};

export default Hero;
