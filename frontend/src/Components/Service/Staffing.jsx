import React from "react";
import { Link } from "react-router-dom";

const Staffing = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-green-600 text-white py-24 text-center shadow-lg">
                <h1 className="text-5xl font-extrabold mb-4">Staffing & Nursing Services</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Skilled staffing solutions for hospitals, aged care homes, and disability providers.
                </p>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-6 md:px-20 text-center max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Overview of Staffing Services</h2>
                <p className="text-lg text-gray-700">
                    Our staffing services connect qualified healthcare professionals with facilities in need.
                    We ensure proper matching, compliance, and flexibility to meet your operational requirements.
                </p>
            </section>

            {/* Services Cards */}
            <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Nursing Staff */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Nursing Staff</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Registered Nurses (RNs)</li>
                        <li>Enrolled Nurses (ENs)</li>
                    </ul>
                </div>

                {/* Personal Care Assistants */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Personal Care Assistants</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>PCAs (Personal Care Assistants)</li>
                        <li>AINs (Assistants in Nursing)</li>
                    </ul>
                </div>

                {/* Allied Health Staffing */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Allied Health Staffing</h3>
                    <p className="text-gray-700">
                        Physiotherapists, occupational therapists, speech therapists, and other allied health professionals.
                    </p>
                </div>

                {/* Temporary & Permanent Placements */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Temporary & Permanent Placements</h3>
                    <p className="text-gray-700">
                        Solutions for short-term needs or long-term staffing requirements.
                    </p>
                </div>

                {/* Workforce For */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Workforce For</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Hospitals</li>
                        <li>Aged Care Homes</li>
                        <li>Disability Providers (NDIS subcontracting)</li>
                    </ul>
                </div>

                {/* Partner with Us */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Partner with Us</h3>
                    <p className="text-gray-700">
                        Hire experienced healthcare staff through our recruitment, training, and management support services.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 md:px-20 text-center bg-green-700 text-white rounded-lg mx-6 md:mx-20 mb-12 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Looking to Hire Staff?</h2>
                <p className="mb-6 text-lg">
                    Partner with us today to access qualified healthcare professionals and streamline your workforce.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
                >
                    Contact Us
                </Link>
            </section>
        </div>
    );
};

export default Staffing;
