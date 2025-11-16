import React from "react";
const NdisCover = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 text-center bg-gradient-to-br from-green-50 via-white to-green-100 shadow-lg overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6">
            NDIS Supports
          </h1>

          <div className="flex justify-center mb-8">
            <img
              src="ndis.jpg"
              alt="NDIS"
              className="w-130 h-90 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the range of services we provide under the{" "}
            <span className="font-semibold text-green-600">
              National Disability Insurance Scheme (NDIS)
            </span>{" "}
            to help you achieve your goals and live a more independent, fulfilling
            life.
          </p>

          
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Overview of NDIS Supports
          </h2>
          <p className="text-lg text-gray-700">
            NDIS provides supports to help participants live independently, engage
            in community activities, and achieve their personal goals. Our services
            are flexible and tailored to meet your individual needs.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Core Supports */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Core Supports</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Daily Living Assistance</li>
            <li>Household Tasks</li>
            <li>Personal Care Support</li>
          </ul>
        </div>

        {/* Community & Social Participation */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Community & Social Participation</h3>
          <p className="text-gray-700">
            Participate in community activities, develop social skills, and enjoy
            recreational programs that promote inclusion and confidence.
          </p>
        </div>

        {/* Therapy Services */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Therapy Services</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Physiotherapy</li>
            <li>Occupational Therapy (OT)</li>
            <li>Speech Therapy</li>
            <li>Psychology Support</li>
          </ul>
        </div>

        {/* Supported Independent Living */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">
            Supported Independent Living (SIL) & Respite
          </h3>
          <p className="text-gray-700">
            Safe and supportive living options for independent living and respite
            care for families and carers.
          </p>
        </div>

        {/* Support Coordination */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-600">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Support Coordination</h3>
          <p className="text-gray-700">
            Connect with the right providers and maximize your NDIS plan with
            guidance from our experienced coordinators.
          </p>
        </div>

        {/* Plan Management */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-600">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Plan Management</h3>
          <p className="text-gray-700">
            Manage your NDIS funding, pay providers, and track spending with ease.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          FAQs for Participants
        </h2>
        <div className="space-y-4">
          <details className="border-l-4 border-blue-600 bg-white rounded p-4 shadow hover:shadow-md transition-shadow duration-300">
            <summary className="font-medium cursor-pointer">What is the NDIS?</summary>
            <p className="mt-2 text-gray-700">
              The NDIS is the National Disability Insurance Scheme, designed to
              provide support to Australians with a disability.
            </p>
          </details>
          <details className="border-l-4 border-blue-600 bg-white rounded p-4 shadow hover:shadow-md transition-shadow duration-300">
            <summary className="font-medium cursor-pointer">
              How do I know which supports I can access?
            </summary>
            <p className="mt-2 text-gray-700">
              Supports are based on your individual plan and goals. We guide you in
              identifying which services are included.
            </p>
          </details>
          <details className="border-l-4 border-blue-600 bg-white rounded p-4 shadow hover:shadow-md transition-shadow duration-300">
            <summary className="font-medium cursor-pointer">Do you provide plan management?</summary>
            <p className="mt-2 text-gray-700">
              Yes, we can assist with plan management to help track spending, pay
              invoices, and provide financial advice.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default NdisCover;
