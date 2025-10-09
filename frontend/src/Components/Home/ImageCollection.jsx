import React from 'react';
import image1 from '../../assets/doctor1 (1).jpeg';
import image2 from '../../assets/doctor1 (2).jpeg';
import image3 from '../../assets/doctor1 (3).jpeg';
import image4 from '../../assets/doctor1 (4).jpeg';
import image5 from '../../assets/doctor1.jpg';

import image6 from '../../assets/legal.jpg';

const Imagecollection = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="container mx-auto px-6 py-10 bg-blue-100">
      <h1 className="text-center text-4xl font-bold mb-1">
        Creating Brighter Days, Together
      </h1>
      <p className="text-center">
        A glimpse into the meaningful connections and dedicated support we provide every day.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>

  );
};

export default Imagecollection;
