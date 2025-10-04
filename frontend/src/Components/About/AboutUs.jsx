import React, { useEffect } from "react";
import { FaBullseye, FaEye, FaUserMd, FaProcedures, FaHospital, FaAward, FaHeart, FaStar, FaLightbulb, FaUsers, FaShieldAlt, FaHandHoldingHeart, FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    // Counter Animation
    const animateValue = (id, start, end, duration) => {
      const obj = document.getElementById(id);
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = value.toLocaleString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    setTimeout(() => {
      animateValue("stat1", 0, 250, 2000);
      animateValue("stat2", 0, 50000, 2000);
      animateValue("stat3", 0, 15, 2000);
      animateValue("stat4", 0, 32, 2000);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {[
            { icon: <FaHeart />, title: "Compassion", text: "We treat every patient with empathy, kindness, and respect." },
            { icon: <FaStar />, title: "Excellence", text: "We pursue the highest standards in all aspects of care." },
            { icon: <FaLightbulb />, title: "Innovation", text: "We embrace new technologies and treatment methods." },
            { icon: <FaUsers />, title: "Collaboration", text: "We work together for the best patient outcomes." },
            { icon: <FaShieldAlt />, title: "Integrity", text: "We uphold the highest ethical standards in all we do." },
            { icon: <FaHandHoldingHeart />, title: "Community", text: "We are committed to serving and improving our community." },
          ].map((val, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl">
                {val.icon}``
              </div>
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative border-l-4 border-gradient from-green-500 to-blue-500 pl-8">
          {[
            { year: "2001", text: "CCNACare founded with a single clinic focused on primary care services." },
            { year: "2008", text: "Expanded to include specialized departments and opened our first surgical center." },
            { year: "2015", text: "Launched telemedicine services and established our research division." },
            { year: "2023", text: "Recognized as a leading healthcare provider with facilities across multiple states." },
          ].map((item, i) => (
            <div key={i} className="mb-10 relative">
              <div className="absolute -left-4 top-1 w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 font-bold">{item.year}</div>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white py-12 px-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Whether you're a patient seeking care or a healthcare professional looking to join our team, we invite you to be part of our mission to transform healthcare.
        </p>
        <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition inline-flex items-center gap-2">
          Get In Touch <FaArrowRight />
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
