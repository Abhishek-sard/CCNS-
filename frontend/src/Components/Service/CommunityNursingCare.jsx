import React from "react";

const CommunityNursingCare = () => {
  const services = [
    {
      icon: "fas fa-band-aid",
      title: "Wound Care",
      desc: "Professional wound cleaning, dressing, and healing supervision at home.",
    },
    {
      icon: "fas fa-pills",
      title: "Medication Management",
      desc: "Ensuring correct dosage, schedules, and adherence to prescriptions.",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Chronic Disease Support",
      desc: "Ongoing assistance for diabetes, hypertension, and other long-term conditions.",
    },
    {
      icon: "fas fa-stethoscope",
      title: "Health Monitoring",
      desc: "Regular check-ups and health assessments by qualified nurses.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-6 md:px-12 text-gray-800">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Community Nursing Care
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Community nursing care brings professional healthcare directly to
          individuals’ homes or local settings, offering a compassionate and
          convenient alternative to hospital visits. These services are designed
          to enhance comfort, recovery, and emotional well-being in familiar
          surroundings.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div
          className="flex-1 relative h-[420px] w-full bg-cover bg-center rounded-2xl shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588776814546-01e391d5b0e6?auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800/70 to-transparent rounded-2xl flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-2 drop-shadow">
              Compassionate Care, Right at Home
            </h2>
            <p className="text-gray-100 text-base drop-shadow">
              Bringing healthcare closer — where comfort and care meet.
            </p>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="flex-1 flex flex-col space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
            Professional Care in Your Community
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            This scope includes wound care, medication management, chronic
            disease support, and general health monitoring by qualified nurses.
            Designed to meet diverse health needs, these services enhance comfort
            and recovery while reducing the stress of frequent medical visits.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition border border-blue-100 flex items-start space-x-4"
              >
                <i
                  className={`${s.icon} text-blue-600 text-3xl bg-blue-100 p-3 rounded-full`}
                ></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {s.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 shadow-md w-max">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityNursingCare;
