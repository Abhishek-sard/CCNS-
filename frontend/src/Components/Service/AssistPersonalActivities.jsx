import React from "react";

const AssistPersonalActivities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section with Image */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Personal Care Services
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Assist Personal Activities
              <span className="text-blue-600 block">High Level Care</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          {/* Main Image with Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src="physical.jpg"
              alt="Healthcare Professional Assisting Client"
              className="w-full h-[250px] lg:h-[400px] object-cover rounded-2xl"
            />


            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold drop-shadow-md">
                  Quality Care with Respect & Dignity
                </h2>
                <p className="text-lg text-gray-200 drop-shadow-sm max-w-md">
                  Ensuring comfort, safety, and independence for individuals with high-level personal activity needs.
                </p>
                <button className="bg-white text-blue-700 hover:text-blue-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                  Contact Us Today
                </button>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Care Support</div>
              </div>
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium">"Exceptional care that truly makes a difference in daily life"</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Content - Text Section */}
          <div className="space-y-8">
            {/* Content Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                High-level personal activities assistance is provided for individuals
                who require significant support to manage their daily lives. This scope
                covers a range of services, including help with personal care such as
                bathing, dressing, and grooming.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Delivered with <span className="text-blue-600 font-semibold">dignity and respect</span>, these services are customized to
                  enhance the quality of life for those with complex needs, ensuring they
                  can maintain independence within a safe and comfortable environment.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Trained professionals work closely with individuals to address their specific
                requirements, promoting both physical and emotional well-being through
                personalized care plans.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                </div>
                <span className="text-gray-700 font-medium">Personal Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                </div>
                <span className="text-gray-700 font-medium">Meal Preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                </div>
                <span className="text-gray-700 font-medium">Mobility Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                </div>
                <span className="text-gray-700 font-medium">Emotional Care</span>
              </div>
            </div>
          </div>

          {/* Right Content - Additional Info */}
          <div className="space-y-8">
            {/* Service Highlights */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Service Includes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Comprehensive personal care assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Medication management support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Mobility and transportation assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Emotional and social support</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                View Services
              </button>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Need Immediate Assistance?</h4>
              <p className="text-blue-700 text-sm mb-3">Our team is available 24/7 to discuss your care needs.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (02) 1234 5678
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Care Plans</h3>
            <p className="text-gray-600">Customized support tailored to individual needs and preferences.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trained Professionals</h3>
            <p className="text-gray-600">Qualified caregivers with extensive experience and compassion.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
            <p className="text-gray-600">Round-the-clock support whenever you need it most.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistPersonalActivities;