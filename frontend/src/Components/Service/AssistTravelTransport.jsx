import React from "react";

const AssistTravelTransport = () => {
    const travelServices = [
        { icon: "fas fa-bus", title: "Accessible Transportation" },
        { icon: "fas fa-hand-holding", title: "Trip Accompaniment" },
        { icon: "fas fa-map-marked-alt", title: "Public Transport Guidance" },
        { icon: "fas fa-heart", title: "Medical & Social Visits" },
    ];

    return (
        <div className="flex flex-col md:flex-row bg-gray-50 text-gray-800 rounded-lg shadow-lg overflow-hidden ">
            {/* Left Image Section */}
            <div
                className="flex-1 relative min-h-[400px] bg-cover bg-center "
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1603077757740-3b0c6b7a81f3?auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-700/60 to-green-400/40 flex justify-center items-center px-6 ">
                    <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-md text-center">
                        Seamless Travel & Transport Support
                    </h2>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-6 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold text-green-700">
                    Assist Travel/Transport
                </h1>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Travel and transport assistance ensures that individuals can move safely and confidently within their communities or beyond. This includes arranging accessible transportation, accompanying individuals on trips, or providing guidance on public transport options.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {travelServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 bg-green-50 shadow rounded-lg hover:shadow-lg transition"
                        >
                            <i className={`${service.icon} text-green-600 text-2xl mr-4`}></i>
                            <span className="font-semibold text-gray-800">{service.title}</span>
                        </div>
                    ))}
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Whether attending medical appointments, social outings, or family visits, support is customized to accommodate physical, cognitive, or other needs, ensuring a seamless and enjoyable travel experience.
                </p>

                <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 shadow-md w-max">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AssistTravelTransport;
