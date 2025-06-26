import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_e0phcjq'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_vnn5pw8'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'saRUagEHU987qASD9'; // Replace with your EmailJS public key

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (formRef.current) {
        // Send email using EmailJS
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        
        setFormSubmitted(true);
        // Reset form
        formRef.current.reset();
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or contact directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setError('');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent tracking-wider">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Section */}
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl transition-colors duration-500">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-amber-300 tracking-wide transition-colors duration-500">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <Mail className="w-8 h-8 text-blue-600 dark:text-amber-400 mr-6 group-hover:animate-pulse transition-colors duration-500" />
                <a 
                  href="mailto:akilasamarasinghe@icloud.com"
                  className="text-lg text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-500"
                >
                  akilasamarasinghe@icloud.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-8 h-8 text-blue-600 dark:text-amber-400 mr-6 group-hover:animate-pulse transition-colors duration-500" />
                <a 
                  href="tel:+94714993320"
                  className="text-lg text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-500"
                >
                  +94 714993320
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-8 h-8 text-blue-600 dark:text-amber-400 mr-6 group-hover:animate-pulse transition-colors duration-500" />
                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-500">Matara, Sri Lanka</span>
              </div>
            </div>

            {/* Additional contact info */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-amber-900/20 rounded-xl border border-blue-200/50 dark:border-amber-500/30 transition-colors duration-500">
              <h4 className="text-lg font-bold text-blue-700 dark:text-amber-300 mb-2 transition-colors duration-500">Quick Response</h4>
              <p className="text-sm text-blue-600 dark:text-amber-200 transition-colors duration-500">
                I typically respond within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            ref={formRef}
            className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl transition-colors duration-500"
            onSubmit={handleSubmit}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-amber-300 tracking-wide transition-colors duration-500">Send a Message</h3>
            
            {!formSubmitted ? (
              <div className="space-y-6">
                {error && (
                  <div className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="user_name" className="block text-sm font-bold text-blue-600 dark:text-amber-400 mb-2 tracking-wide transition-colors duration-500">NAME</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="w-full rounded-lg border border-gray-300 dark:border-amber-500/30 bg-white dark:bg-black/40 text-gray-800 dark:text-gray-200 px-4 py-3 focus:border-blue-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-bold text-blue-600 dark:text-amber-400 mb-2 tracking-wide transition-colors duration-500">EMAIL</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="w-full rounded-lg border border-gray-300 dark:border-amber-500/30 bg-white dark:bg-black/40 text-gray-800 dark:text-gray-200 px-4 py-3 focus:border-blue-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Email"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-blue-600 dark:text-amber-400 mb-2 tracking-wide transition-colors duration-500">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 dark:border-amber-500/30 bg-white dark:bg-black/40 text-gray-800 dark:text-gray-200 px-4 py-3 focus:border-blue-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Message Subject"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-blue-600 dark:text-amber-400 mb-2 tracking-wide transition-colors duration-500">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 dark:border-amber-500/30 bg-white dark:bg-black/40 text-gray-800 dark:text-gray-200 px-4 py-3 focus:border-blue-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-amber-400/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-amber-600 dark:to-amber-500 text-white dark:text-black font-black py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-amber-500 dark:hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-black mr-2"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 animate-pulse" />
                </div>
                <p className="text-2xl text-blue-600 dark:text-amber-300 font-bold mb-4 tracking-wide transition-colors duration-500">
                  MESSAGE SENT SUCCESSFULLY!
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-500">
                  Thank you for reaching out! I'll get back to you within 24 hours at{' '}
                  <span className="text-blue-600 dark:text-amber-400 font-bold transition-colors duration-500">your provided email</span> or{' '}
                  <span className="text-blue-600 dark:text-amber-400 font-bold transition-colors duration-500">+94 714993320</span>.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:from-gray-600 hover:to-gray-700 dark:hover:from-gray-500 dark:hover:to-gray-600 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Setup Instructions */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-2">EmailJS Setup Required</h4>
            <p className="text-sm text-yellow-600 dark:text-yellow-200">
              To enable email functionality, please:
              <br />1. Create an account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">EmailJS.com</a>
              <br />2. Replace the service ID, template ID, and public key in the code
              <br />3. Configure your email template with variables: user_name, user_email, subject, message
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
