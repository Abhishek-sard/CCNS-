import React from "react";
import Img1 from "../../assets/ndis.jpg";
import Img2 from "../../assets/ndis2.jpg";
import Img3 from "../../assets/ndis3.jpg";

const testimonials = [
  {
    name: "Jane Smith",
    role: "NDIS Participant",
    photo: Img1,
    quote: "CCNA Agency has truly changed my life. Their support is compassionate and reliable."
  },
  {
    name: "John Doe",
    role: "Facility Manager",
    photo: Img2,
    quote: "The staffing solutions provided by CCNA Agency are professional and trustworthy."
  },
  {
    name: "Mary Johnson",
    role: "Family Member",
    photo: Img3,
    quote: "CCNA Agency has been a lifesaver for my son. Their staff are kind, professional, and reliable."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Testimonials / Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center max-w-sm w-full min-h-[28rem]"
            >
              <img 
                src={t.photo} 
                alt={t.name} 
                className="w-24 h-24 rounded-full mb-6 object-cover"
              />
              <p className="text-gray-700 mb-4">&quot;{t.quote}&quot;</p>
              <h3 className="text-blue-700 font-semibold mb-1">{t.name}</h3>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
