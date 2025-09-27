import React from "react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log(formData);
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };


  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Get In Touch</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </header>

      {/* Contact Section */}
      <div className="flex flex-wrap gap-8">
        {/* Contact Form */}
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 min-h-[120px] resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-xl shadow-md">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-4">📍</span>
                <div>
                  <h4 className="font-medium text-gray-800">Our Location</h4>
                  <p className="text-gray-500">123 Business Avenue, Suite 100<br/>San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-4">📞</span>
                <div>
                  <h4 className="font-medium text-gray-800">Phone Number</h4>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-4">✉️</span>
                <div>
                  <h4 className="font-medium text-gray-800">Email Address</h4>
                  <p className="text-gray-500">info@company.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-4">🕒</span>
                <div>
                  <h4 className="font-medium text-gray-800">Business Hours</h4>
                  <p className="text-gray-500">
                    Monday - Friday: 9:00 AM - 6:00 PM<br/>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
            [Interactive Map Would Go Here]
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ContactPage;
