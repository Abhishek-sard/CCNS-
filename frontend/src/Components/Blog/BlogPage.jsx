import React, { useState } from "react";

const blogData = [
    {
        id: 1,
        title: "NDIS & Staffing Solutions Overview",
        snippet: "Learn how our NDIS and staffing services support participants and healthcare facilities...",
        fullContent: "Our project provides comprehensive NDIS services including Core Supports, Therapy, SIL, Support Coordination, and Plan Management. Additionally, we provide skilled staffing solutions for hospitals, aged care homes, and disability providers, ensuring the right workforce is available where needed.",
    },
    {
        id: 2,
        title: "How Our NDIS Services Work",
        snippet: "Understand the key supports offered under NDIS and how participants benefit...",
        fullContent: "NDIS supports are designed to promote independence and community participation. We provide personalized plans, connect participants to providers, and offer therapy and support coordination to meet individual goals.",
    },
    {
        id: 3,
        title: "Staffing & Nursing Services Explained",
        snippet: "Discover our staffing solutions for healthcare and disability providers...",
        fullContent: "We offer qualified Registered Nurses, Enrolled Nurses, PCAs, and allied health staff for temporary or permanent placements. Our services help hospitals, aged care, and NDIS providers maintain high-quality care and compliance.",
    },
    {
        id: 4,
        title: "Core Supports for Daily Living",
        snippet: "Explore the daily living supports available under NDIS...",
        fullContent: "Our core supports include assistance with personal care, household tasks, meal preparation, and other activities that help participants live independently and comfortably.",
    },
    {
        id: 5,
        title: "Community & Social Participation",
        snippet: "See how we promote inclusion and social engagement...",
        fullContent: "We organize and support community participation, social skill programs, and recreational activities that foster confidence, independence, and connection with others.",
    },
    {
        id: 6,
        title: "Therapy & Allied Health Services",
        snippet: "Learn about physiotherapy, OT, and speech therapy options...",
        fullContent: "Our allied health services include physiotherapy, occupational therapy, speech therapy, and psychology support, tailored to meet the individual needs of participants.",
    },
];

const BlogCard = ({ title, snippet, fullContent }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300 w-80 flex flex-col justify-between border-l-4 border-blue-600">
            <div>
                <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">
                    {expanded ? fullContent : snippet}
                </p>
            </div>
            <button
                className="text-blue-600 font-semibold hover:underline mt-2 self-start text-sm"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "See Less" : "See More"}
            </button>
        </div>
    );
};

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-28 px-6 md:px-20">
            <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
                Project Blog
            </h1>

            <div className="flex flex-wrap gap-6 justify-center">
                {blogData.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        snippet={blog.snippet}
                        fullContent={blog.fullContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
