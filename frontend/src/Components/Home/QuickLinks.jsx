// QuickLinks.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaUserNurse } from "react-icons/fa";

// images
import personalImage from "../../assets/personalimage.jpg";
import nursingImage from "../../assets/nursing.jpg";
import hospitalityImage from "../../assets/hospility.jpg";
import healthcareImage from "../../assets/healthcare.jpg";
import rehabImage from "../../assets/Rehabilitation.jpg";
import wellnessImage from "../../assets/Wellness.jpg";
import educationImage from "../../assets/Education.jpg";
import financeImage from "../../assets/finance.jpg";
import legalImage from "../../assets/legal.jpg";
import securityImage from "../../assets/secrutiy.jpg";
import businessImage from "../../assets/business.jpg";
import itImage from "../../assets/It.jpg";

// AnimatedCard component
const AnimatedCard = ({ card, direction = "left", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dirMap = {
    left: "-translate-x-8",
    right: "translate-x-8",
    top: "-translate-y-8",
    bottom: "translate-y-8",
  };

  const initialClasses = visible
    ? "opacity-100 translate-x-0 translate-y-0"
    : `opacity-0 ${dirMap[direction]}`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${initialClasses}`}
    >
      {/* Left color stripe */}
      <div className={`absolute top-0 left-0 h-full w-2 ${card.color}`}></div>

      <div className="overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-blue-700 mb-3">{card.title}</h3>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </div>
  );
};

const QuickLinks = () => {
  const cards = [
    {
      title: "Personal Care",
      description: "Compassionate support with daily living activities such as bathing, grooming, and dressing, ensuring dignity and comfort at all times.",
      image: personalImage,
      color: "bg-blue-600"
    },
    {
      title: "Nursing Care",
      description: "Professional nursing services including wound care, medication management, and monitoring of vital health conditions at home.",
      image: nursingImage,
      color: "bg-green-600"
    },
    {
      title: "Companionship",
      description: "Building meaningful connections through friendly conversations, shared activities, and emotional support to reduce loneliness.",
      image: hospitalityImage,
      color: "bg-yellow-600"
    },
    {
      title: "Healthcare Support",
      description: "Assistance with hospital visits, doctor appointments, physiotherapy sessions, and coordination of medical services.",
      image: healthcareImage,
      color: "bg-red-600"
    },
    {
      title: "Rehabilitation",
      description: "Tailored rehabilitation plans including physical therapy, mobility exercises, and recovery programs for faster healing.",
      image: rehabImage,
      color: "bg-purple-600"
    },
    {
      title: "Wellness & Lifestyle",
      description: "Promoting healthy living with fitness sessions, nutrition planning, and relaxation techniques for overall wellbeing.",
      image: wellnessImage,
      color: "bg-pink-600"
    },
    {
      title: "Health Education",
      description: "Workshops and training for families and caregivers to understand health needs, first aid, and chronic condition management.",
      image: educationImage,
      color: "bg-indigo-600"
    },
    {
      title: "Financial Guidance",
      description: "Support in managing healthcare-related finances, insurance claims, and planning for affordable long-term care.",
      image: financeImage,
      color: "bg-orange-600"
    },
    {
      title: "Legal Assistance",
      description: "Guidance on legal matters such as patient rights, guardianship, and healthcare documentation support.",
      image: legalImage,
      color: "bg-teal-600"
    },
    {
      title: "Safety & Security",
      description: "Ensuring a safe environment with fall-prevention strategies, home safety checks, and emergency response readiness.",
      image: securityImage,
      color: "bg-gray-700"
    },
    {
      title: "Community Engagement",
      description: "Encouraging social participation through group activities, volunteering opportunities, and community events.",
      image: businessImage,
      color: "bg-cyan-600"
    },
    {
      title: "Digital Support",
      description: "Helping seniors and families with technology, from telehealth consultations to staying connected through video calls.",
      image: itImage,
      color: "bg-rose-600"
    },
  ];


  const directions = ["left", "right", "top", "bottom"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-12">
          Our Comprehensive Services
        </h2>

        {/* NDIS + Staffing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <Link
            to="/NdisCover"
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-lg p-8 text-center"
          >
            <FaHospital className="text-6xl text-blue-700 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700">
              NDIS Services
            </h3>
            <p className="text-gray-700 mb-4">
              Assistance, support, and independence for NDIS participants to live fulfilling lives.
            </p>
            <span className="text-blue-700 font-semibold hover:underline">Learn More →</span>
          </Link>

          <Link
            to="/Staffing"
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-lg p-8 text-center"
          >
            <FaUserNurse className="text-6xl text-blue-700 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700">
              Staffing Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Trusted nurses, carers, and healthcare staff for facilities across Australia.
            </p>
            <span className="text-blue-700 font-semibold hover:underline">Learn More →</span>
          </Link>
        </div>

        {/* 12 animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimatedCard
              key={i}
              card={card}
              direction={directions[i % directions.length]}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
