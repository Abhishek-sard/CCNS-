import React, { useEffect, useState } from "react";
import { 
  FaHandHoldingMedical, FaHome, FaUserMd, FaHospital, FaProcedures,
  FaUserInjured, FaCogs, FaUserGraduate, FaHeart, FaHouseUser, 
  FaAward, FaLaptopMedical, FaShieldVirus
} from "react-icons/fa";

const CCNANursingAgency = () => {
  const [activeTab, setActiveTab] = useState("accommodation");
  const stats = [
    { number: "500+", label: "Qualified Nurses" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Care Availability" },
    { number: "15+", label: "Years of Service" },
  ];

  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target);
      if (isNaN(target)) return;
      let count = 0;
      const step = target / 100;
      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.textContent = Math.floor(count) + counter.dataset.suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target + counter.dataset.suffix;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-10 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center items-center mb-4">
            <FaHandHoldingMedical className="text-4xl mr-3" />
            <h1 className="text-3xl font-semibold">CCNA Nursing Agency</h1>
          </div>
          <p className="text-lg">Professional Care with Compassion and Expertise</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Intro Section */}
        <section className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Accommodation and Tendency of CCNA Nursing Agency
          </h2>
          <p className="mb-3">
            The <strong>CCNA Nursing Agency</strong> provides professional
            nursing and caregiving services to individuals, hospitals, and
            healthcare institutions. It focuses on offering compassionate care,
            skilled nursing assistance, and home-based health support to
            patients in need.
          </p>
          <p>
            The topic <em>"Accommodation and Tendency of CCNA Nursing Agency"</em>{" "}
            highlights how the agency adapts to patient needs (<em>accommodation</em>)
            and the growing trends in healthcare (<em>tendency</em>).
          </p>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <span
                className="count text-3xl font-bold text-orange-500 block"
                data-target={parseInt(s.number)}
                data-suffix={s.number.replace(/[0-9]/g, "")}
              >
                {s.number}
              </span>
              <span className="text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Services */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-orange-500 inline-block">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaHome />, title: "Home Nursing", text: "Professional care in the comfort of your home" },
              { icon: <FaUserMd />, title: "Elderly Care", text: "Specialized care for senior patients" },
              { icon: <FaHospital />, title: "Hospital Assistance", text: "Support services in medical facilities" },
              { icon: <FaProcedures />, title: "Post-Surgery Care", text: "Recovery support after procedures" },
            ].map((srv, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-blue-600 text-3xl mb-3 mx-auto">{srv.icon}</div>
                <h3 className="text-lg font-semibold">{srv.title}</h3>
                <p className="text-gray-600">{srv.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <section className="mt-12">
          <div className="flex flex-wrap border-b mb-4">
            <button
              className={`px-6 py-2 font-medium border-b-4 transition ${
                activeTab === "accommodation"
                  ? "border-orange-500 text-blue-700 bg-white"
                  : "border-transparent text-gray-600 bg-gray-200"
              }`}
              onClick={() => setActiveTab("accommodation")}
            >
              Accommodation
            </button>
            <button
              className={`px-6 py-2 font-medium border-b-4 transition ${
                activeTab === "tendency"
                  ? "border-orange-500 text-blue-700 bg-white"
                  : "border-transparent text-gray-600 bg-gray-200"
              }`}
              onClick={() => setActiveTab("tendency")}
            >
              Tendency
            </button>
          </div>

          {/* Accommodation Content */}
          {activeTab === "accommodation" && (
            <div className="space-y-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800">
                Accommodation of CCNA Nursing Agency
              </h3>
              <p>
                The <strong>accommodation</strong> of CCNA Nursing Agency refers
                to how it adjusts its services to meet the diverse needs of
                clients and healthcare facilities.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaUserInjured />,
                    title: "Patient-Centered Care",
                    text: "Personalized nursing support based on health condition and needs.",
                    list: [
                      "Individualized care plans",
                      "Personalized attention",
                      "Adaptable scheduling",
                    ],
                  },
                  {
                    icon: <FaCogs />,
                    title: "Flexible Service Options",
                    text: "Offers home nursing, elderly care, hospital assistance, and post-surgery support.",
                    list: [
                      "Customizable care packages",
                      "Emergency & scheduled care",
                      "Multiple service tiers",
                    ],
                  },
                  {
                    icon: <FaUserGraduate />,
                    title: "Trained & Certified Staff",
                    text: "Qualified professionals ensuring safe and ethical healthcare.",
                    list: [
                      "Rigorous hiring standards",
                      "Professional development",
                      "Specialized certifications",
                    ],
                  },
                  {
                    icon: <FaHeart />,
                    title: "Supportive Environment",
                    text: "Creates a safe and caring space for patients.",
                    list: [
                      "Emotional support",
                      "Family involvement",
                      "Respect for patient dignity",
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="border-t-4 border-blue-600 rounded-lg p-5 shadow-md hover:shadow-lg transition">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-2xl mr-3">
                        {card.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{card.title}</h4>
                    </div>
                    <p className="mb-3 text-gray-700">{card.text}</p>
                    <ul className="space-y-1 text-gray-600 list-disc ml-5">
                      {card.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tendency Content */}
          {activeTab === "tendency" && (
            <div className="space-y-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800">
                Tendency of CCNA Nursing Agency
              </h3>
              <p>
                The <strong>tendency</strong> of CCNA Nursing Agency refers to
                the trends and direction in which the agency’s operations are
                developing in the healthcare field.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaHouseUser />,
                    title: "Increasing Demand for Home Care",
                    text: "More families are preferring home-based services due to comfort and affordability.",
                    list: [
                      "Aging in place preference",
                      "Cost-effective alternative",
                      "Enhanced patient recovery",
                    ],
                  },
                  {
                    icon: <FaAward />,
                    title: "Focus on Professionalism",
                    text: "Continuous training and ethics to ensure high-quality care.",
                    list: [
                      "Regular skill upgrades",
                      "Adherence to standards",
                      "Performance evaluation",
                    ],
                  },
                  {
                    icon: <FaLaptopMedical />,
                    title: "Use of Modern Technology",
                    text: "Digital records, tele-nursing, and app-based care solutions.",
                    list: [
                      "Electronic health records",
                      "Telehealth systems",
                      "Mobile app scheduling",
                    ],
                  },
                  {
                    icon: <FaShieldVirus />,
                    title: "Growing Health Awareness",
                    text: "Increased focus on hygiene and preventive care post-pandemic.",
                    list: [
                      "Infection control protocols",
                      "Preventive health focus",
                      "Health education initiatives",
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="border-t-4 border-blue-600 rounded-lg p-5 shadow-md hover:shadow-lg transition">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-2xl mr-3">
                        {card.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{card.title}</h4>
                    </div>
                    <p className="mb-3 text-gray-700">{card.text}</p>
                    <ul className="space-y-1 text-gray-600 list-disc ml-5">
                      {card.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Conclusion */}
        <section className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-lg p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p className="mb-2">
            The <strong>Accommodation and Tendency of CCNA Nursing Agency</strong> show
            its vital role in modern healthcare, offering flexibility and
            compassion through professional care.
          </p>
          <p>
            Its focus on home care, professionalism, and technology ensures a
            promising future for healthcare services.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us Today
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>CCNA Nursing Agency - Professional Care with Compassion</p>
        <p className="text-gray-400 text-sm">© 2025 CCNA Nursing Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CCNANursingAgency;
