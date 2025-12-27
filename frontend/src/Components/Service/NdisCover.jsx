import React from "react";
import ImageHero from "../../assets/nurse.png";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const NdisCover = () => {
  const services = [
    {
      title: "Accommodation / Tenancy Assistance",
      color: "blue",
      text: "We assist with housing needs, identifying issues, and finding solutions for suitable accommodation.",
      link: "/nursing",
    },
    {
      title: "Assistance in Accessing and Maintaining Employment / Education",
      color: "green",
      text: "We help participants secure and maintain employment, develop skills, and achieve career goals.",
      link: "/support",
    },
    {
      title: "High Intensity Personal Activities",
      color: "purple",
      text: "Includes PEG feed management, tracheostomy care, catheter care, ventilator support, and complex wound care.",
      link: "/stage",
    },
    {
      title: "Life Stages / Transitions Support",
      color: "red",
      text: "We support major life changes such as managing finances, personal hygiene, cooking, marriage, and more.",
      link: "/lifeStage",
    },
    {
      title: "Support Coordination",
      color: "yellow",
      text: "Connect with quality providers and maximize your NDIS plan with expert coordination.",
      link: "/travel",
    },
    {
      title: "Daily Personal Activities",
      color: "pink",
      text: "We help with cooking, cleaning, personal hygiene, and mobility assistance.",
      link: "/assist",
    },
    {
      title: "Travel & Transport Assistance",
      color: "pink",
      text: "Supporting individuals with disabilities who face difficulty accessing transport.",
      link: "/travel",
    },
    {
      title: "Community Nursing Care",
      color: "pink",
      text: "Professional nursing care provided in the community by experienced nurses.",
      link: "/community",
    },
    {
      title: "Daily Tasks / Shared Living",
      color: "pink",
      text: "Assistance with daily activities in group homes or shared living environments.",
      link: "/shared-living",
    },
    {
      title: "Innovative Community Participation",
      color: "pink",
      text: "Helping participants join community clubs, attend events, and engage socially.",
      link: "/innovCommunity",
    },
    {
      title: "Life Skill Development",
      color: "pink",
      text: "Teaching budgeting, public transport use, cooking, hygiene, and personal development.",
      link: "/development",
    },
    {
      title: "Household Tasks",
      color: "pink",
      text: "Support with cleaning, laundry, groceries, home maintenance, and grooming.",
      link: "/household",
    },
    {
      title: "Community Participation",
      color: "pink",
      text: "Building social skills, accessing facilities, support with transport, and wellbeing activities.",
      link: "/participation",
    },
    {
      title: "Special Support Employment",
      color: "pink",
      text: "Assisting individuals with disabilities who need support to engage in employment.",
      link: "/support",
    },
    {
      title: "Group / Centre Activities",
      color: "pink",
      text: "Support to join recreational activities like camping, movies, sports, and museums.",
      link: "/center",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 min-h-screen pt-18 flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-teal-50 to-teal-50">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl animate-float delay-4000"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-teal-200/50 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Compassionate Care, <br />
              <span className="text-transparent bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text">
                Reliable Support
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
              At <span className="font-semibold text-teal-600">CCNA Care</span>, we empower NDIS participants to live fulfilling lives
              while providing trusted healthcare staffing solutions to facilities across Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-2">
              <Link
                to="/ndis"
                className="group  bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold border-2 border-teal-500 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center min-w-[180px]"
              >
                <span className="relative z-10">Contact Us</span>

                <div className="absolute inset-0 border-2 border-teal-200 rounded-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-teal-600">100+</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative md:w-1/2 flex justify-center -mt-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-teal-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white rounded-2xl p-4 border border-gray-200 shadow-2xl">
                <img
                  src={ImageHero}
                  alt="Healthcare Support"
                  className="w-full max-w-md rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg animate-bounce">Trusted</div>
              <div className="absolute -bottom-4 -left-4 bg-white text-teal-600 px-4 py-1.5 rounded-full font-bold text-xs shadow-lg border border-teal-200 animate-bounce delay-1000">Certified</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-teal-600">
            <span className="text-sm mb-1">Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-teal-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-teal-400 rounded-full mt-1 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-700">
            NDIS provides supports to help participants live independently, engage in community activities, and achieve their personal goals. Our services are flexible and tailored to meet your individual needs.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border-l-4 border-teal-600 hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>

            <div className="mt-6">
              <Link
                to={item.link}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
              >
                Get Started <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      {/* <div className="text-center my-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h1>
        <Link to="/contact">
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition">Get Started Now</button>
        </Link>
      </div> */}

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Why Choose <span className="text-teal-600">CCNA Care</span>?
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            At CCNA Care, we are committed to delivering high-quality, person-centred
            NDIS support that empowers individuals to live independently and with dignity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Person-Centred Approach
              </h3>
              <p className="text-gray-700">
                Every participant is unique. We design flexible support plans that
                align with your goals, preferences, and lifestyle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Qualified & Compassionate Staff
              </h3>
              <p className="text-gray-700">
                Our team consists of trained, experienced, and caring professionals
                who deliver support with empathy and respect.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Reliable & 24/7 Support
              </h3>
              <p className="text-gray-700">
                We provide dependable services with round-the-clock availability to
                ensure peace of mind for participants and families.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                NDIS Expertise
              </h3>
              <p className="text-gray-700">
                Our in-depth understanding of NDIS guidelines helps participants
                maximise their plans and access the right supports.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Community Focused
              </h3>
              <p className="text-gray-700">
                We encourage social inclusion, skill development, and active
                participation in community life.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Trusted Care Provider
              </h3>
              <p className="text-gray-700">
                CCNA Care is built on trust, transparency, and consistent quality
                service across Australia.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/ndis">
              <button className="bg-teal-600 text-white px-10 py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
                Start Your Journey With Us
                <FiArrowRight className="inline-block ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto mt-[-20px]">


        <div className="text-center my-2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Ready to Explore</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/ndis">
              <button className="bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition">Contact Now
                <FiArrowRight className="inline-block ml-2" />
              </button>
            </Link>
            <Link to="/ndiscontact">
              <button className="bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition">Refer Someone
                <FiArrowRight className="inline-block ml-2" />
              </button>
            </Link>
            <Link to="https://business.google.com/reviews">
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition">About Us
                <FiArrowRight className="inline-block ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default NdisCover; 