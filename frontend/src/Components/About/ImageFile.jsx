import React from "react";
import TeamImage from "../../assets/groupdoctor.jpg.jpg"
const ImageFile = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image with badge */}
        <div className="relative w-full md:w-1/2">
          <img 
            src={TeamImage} 
            alt="Team" 
            className="rounded-tl-3xl rounded-br-3xl w-full object-cover"
          />
          <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-bold">
            10+ Years
            <span className="block text-sm font-normal">Experience</span>
          </div>
        </div>

        {/* Right Side - Text content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            About CCNASA
          </h1>
          <p className="text-gray-700 mb-6">
            At CCNASA, we are dedicated to linking healthcare careers with skilled staff to ensure excellent care delivery. With a team of highly qualified and experienced nurses and healthcare professionals at the helm, CCNASA has established itself as a leading nursing agency in Australia. Our unwavering commitment is to provide satisfaction and peace of mind to both our clients and staff.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Creative Career Nursing Agency SA – CCNASA, our mission is to provide reliable, sustainable and affordable caring solutions to individuals as well as organisations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageFile;
