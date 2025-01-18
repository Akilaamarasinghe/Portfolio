import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-blue-500 mr-4" />
                <span className="text-lg">akilasamarasinghe@icloud.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-8 h-8 text-blue-500 mr-4" />
                <span className="text-lg">+94 714993320</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-blue-500 mr-4" />
                <span className="text-lg">Matara, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            className="space-y-6 bg-white rounded-lg p-6 shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">Send a Message</h3>
            {!formSubmitted ? (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </>
            ) : (
              <div className="text-center">
                <p className="text-lg text-green-600 font-semibold mb-4">
                  Your message has been sent successfully!
                </p>
                <p className="text-gray-600">
                  We will get back to you at <span className="font-bold">+94 714993320</span> or{' '}
                  <span className="font-bold">akilasamarasinghe@icloud.com</span> shortly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
