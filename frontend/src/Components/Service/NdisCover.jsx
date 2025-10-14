import React from "react"; 
const NdisCover = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-700 text-white py-24 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">NDIS Supports</h1>

        <img src="" alt="" /> 
        <p className="text-xl max-w-3xl mx-auto">
          Explore the range of services we provide under the National Disability
          Insurance Scheme (NDIS) to help you achieve your goals.
        </p>
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
