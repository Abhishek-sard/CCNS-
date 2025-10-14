import React from "react";

const CommunityNursingCare = () => {
  const services = [
    {
      icon: "🩹",
      title: "Wound Care",
      desc: "Professional wound cleaning, dressing, and healing supervision at home.",
    },
    {
      icon: "💊",
      title: "Medication Management",
      desc: "Ensuring correct dosage, schedules, and adherence to prescriptions.",
    },
    {
      icon: "❤️",
      title: "Chronic Disease Support",
      desc: "Ongoing assistance for diabetes, hypertension, and other long-term conditions.",
    },
    {
      icon: "📊",
      title: "Health Monitoring",
      desc: "Regular check-ups and health assessments by qualified nurses.",
    },
  ];

  const features = [
    {
      icon: "🏠",
      title: "Home-Based Care",
      description: "Professional healthcare in the comfort of your home"
    },
    {
      icon: "⏰",
      title: "Flexible Scheduling",
      description: "Appointments that work around your schedule"
    },
    {
      icon: "👨‍⚕️",
      title: "Qualified Nurses",
      description: "Experienced and certified nursing professionals"
    },
    {
      icon: "💝",
      title: "Compassionate Approach",
      description: "Personalized care with dignity and respect"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Professional Healthcare Services
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Community Nursing Care
            <span className="text-blue-600 block">Compassionate Care in Your Home</span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        </div>

        {/* Main Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img
            src="innov.jpg"
            alt="Community nursing care professional assisting patient"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold drop-shadow-md">
                Compassionate Care, Right at Home
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-sm max-w-2xl">
                Bringing professional healthcare closer — where comfort and care meet in familiar surroundings
              </p>
              <button className="bg-white text-blue-700 hover:text-blue-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                Schedule a Visit
              </button>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Care Available</div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content - Description */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Community nursing care brings professional healthcare directly to
                individuals' homes or local settings, offering a compassionate and
                convenient alternative to hospital visits. These services are designed
                to enhance comfort, recovery, and emotional well-being in familiar
                surroundings.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                This scope includes wound care, medication management, chronic
                disease support, and general health monitoring by qualified nurses.
                Designed to meet diverse health needs, these services enhance comfort
                and recovery while reducing the stress of frequent medical visits.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>



            {/* Quick Contact */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Need Immediate Care?</h4>
              <p className="text-blue-700 text-sm mb-3">Our nursing team is available for urgent healthcare needs.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Contact: (02) 1234 5678
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Comprehensive Nursing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Post-Hospital Care",
                description: "Recovery support after hospital discharge"
              },
              {
                title: "Palliative Care",
                description: "Comfort and dignity in serious illness"
              },
              {
                title: "Health Education",
                description: "Guidance for managing health conditions"
              },
              {
                title: "Family Support",
                description: "Training and support for family caregivers"
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">➕</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assured</h3>
            <p className="text-gray-600">All services meet highest healthcare standards and protocols.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h3>
            <p className="text-gray-600">Rapid appointment scheduling and emergency care availability.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuity of Care</h3>
            <p className="text-gray-600">Consistent nursing support with familiar healthcare professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityNursingCare;