import React from "react";
import EmailIcon from "../assets/gmail.png";
import WhatsAppIcon from "../assets/whatapp.jpg";
import { Phone } from "lucide-react";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">

      {/* Gmail Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=ndis@ccnacare.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block group"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>

        <div className="relative bg-blue-500 rounded-full p-3 shadow-2xl transition transform group-hover:scale-110">
          <img src={EmailIcon} alt="Email" className="w-7 h-7" />
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Email Us
          <div className="absolute top-1/2 right-0 translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-blue-600"></div>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/61433525858"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        <div className="relative bg-green-500 rounded-full p-3 shadow-2xl transition transform group-hover:scale-110">
          <img src={WhatsAppIcon} alt="WhatsApp" className="w-8 h-8 rounded-full" />
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
          <div className="absolute top-1/2 right-0 translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-green-600"></div>
        </div>
      </a>

      {/* Call Button */}
      <a href="tel:+61433525858" className="relative block group mb-15">
        <div className="absolute inset-0 bg-green-700 rounded-full animate-ping opacity-20"></div>

        <div className="relative bg-green-700 rounded-full p-3 shadow-2xl transition transform group-hover:scale-110">
          <Phone size={26} className="text-white" />
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-800 text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Call Now
          <div className="absolute top-1/2 right-0 translate-x-1 -translate-y-1/2 border-8 border-transparent border-l-green-800"></div>
        </div>
      </a>

    </div>
  );
};

export default ContactButtons;
