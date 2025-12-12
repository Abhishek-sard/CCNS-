// ContactButtons.jsx
import React from "react";
import EmailIcon from "../assets/gmail.png";
import PhoneIcon from "../assets/phone.png";

const ContactButtons = () => {
    return (
        <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50 mb-18">

            {/* Gmail Button */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ndis@ccnacare.com.au"
                className="relative block group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-blue-500 rounded-full p-2 shadow-2xl transform transition duration-300 group-hover:scale-110">
                    <img src={EmailIcon} alt="Email" className="w-7 h-7" />
                </div>
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Email Us
                    <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-blue-600"></div>
                </div>
            </a>

            {/* WhatsApp Button (instead of Call) */}
            <a
                href="https://wa.me/61421079928"
                className="relative block group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-green-500 rounded-full p-2 shadow-2xl transform transition duration-300 group-hover:scale-110">
                    <img src={PhoneIcon} alt="WhatsApp" className="w-8 h-8 rounded-full" />
                </div>
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    WhatsApp
                    <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-green-600"></div>
                </div>
            </a>

        </div>
    );
};

export default ContactButtons;
