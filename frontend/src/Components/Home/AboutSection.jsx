import React from "react";
import { Link } from "react-router-dom";
import LogoNurse from '../../assets/filter.png'


const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Image (optional) */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img 
            src={LogoNurse} // replace with your image
            alt="About CCNA Agency"
            className="w-3/4 md:w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            About CCNA Agency
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            CCNA Agency plays a dual role in empowering individuals and supporting facilities.
            We help NDIS participants live fulfilling, independent lives while providing trusted
            healthcare staffing solutions to facilities across Australia. Our team is dedicated,
            compassionate, and committed to delivering high-quality services every day.
          </p>

          {/* About Us Button */}
          <Link
            to="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
