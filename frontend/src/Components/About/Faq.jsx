import React, { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is NDIS?",
            answer: "The NDIS is the National Disability Insurance Scheme, designed to provide support to Australians with a disability.",

        },
        {
            question: "Who can participate in NDIS services?",
            answer:
                "Anyone aged between 7 and 65 with a significant and permanent disability may be eligible to participate in NDIS services.",
        },
        {
            question: "How do I know which supports I can access?",
            answer:
                "Supports are based on your individual plan and goals. We guide you in identifying which services are included.",
        },
        {
            question: "Do you provide plan management?",
            answer:
                "Yes, we can assist with plan management to help track spending, pay invoices, and provide financial advice.",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 mt-16 mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
                Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm"
                    >
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="w-full text-left font-semibold text-lg flex justify-between items-center"
                        >
                            {faq.question}
                            <span className="text-xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
